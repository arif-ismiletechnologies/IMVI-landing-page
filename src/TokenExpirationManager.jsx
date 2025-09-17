// TokenExpirationManager.jsx
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { jwtTokenState, expState } from './store/atoms'; // Import your jwtState atom
import ExpirationPopup from './components/Home/ExpirationPopup';
import { fetchAuthSession, signOut, getCurrentUser, updateUserAttribute } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import useLambda from './components/hooks/useLambda';


const TokenExpirationManager = ({ children }) => {
  const [exp, setExp] = useRecoilState(expState);
  const [jwt, setJwt] = useRecoilState(jwtTokenState);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const { decodeToken } = useLambda();

  useEffect(() => {
    if (!jwt) return;
    //console.log('jwt inside token expiration manager: '+jwt);
    //const token = jwtDecode(jwt);
    const expirationTime = exp * 1000; // Convert to milliseconds
    const currentTime = Date.now();
    const timeUntilExpiration = expirationTime - currentTime;
    const warningTime = 5 * 60 * 1000; // 5 minutes before expiration

    if (timeUntilExpiration <= warningTime) {
      setShowPopup(true);
    }

    const timerId = setTimeout(() => {
      setShowPopup(true);
    }, timeUntilExpiration - warningTime);

    return () => clearTimeout(timerId);
  }, [jwt]);

  const handleRefresh = async () => {
    try {
      const {tokens} = await fetchAuthSession({forceRefresh: true});
      const newToken = tokens.idToken.toString();
      const decodedToken = decodeToken(newToken);
      setJwt(newToken);
      const expTime = decodedToken['exp'];
      setExp(expTime);
      //window.location.reload();
      setShowPopup(false);
    } catch (error) {
      console.error('Failed to refresh token:', error);
      handleLogout();
    }
  };

  const handleSessionExpire = () => {
    handleLogout();
  };

  async function updateLastLogin() {
    try {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        console.log('No authenticated user found');
        return;
      }
  
      
      const loginTime = localStorage.getItem('loginTime');
      console.log('Setting login time to:', loginTime);
  
          // Try with explicit attributes object format
          const result = await updateUserAttribute({
            userAttribute: {
              attributeKey: 'custom:loginTime',
              value: loginTime
            }
          });
  
      console.log('Last login updated successfully', result);
    } catch (error) {
      console.error('Error updating last login:', error);
      if (error instanceof Error) {
        console.error('Error type:', error.constructor.name);
        console.error('Error message:', error.message);
        console.error('Full error:', error);
      }
    }
  }

  const handleLogout = async () => {
    try {
      await updateLastLogin();
      sessionStorage.clear();
      await signOut();
      navigate('/signin', { replace: true });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      {children}
      {showPopup && (
        <ExpirationPopup 
          style={{zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0}}
          onRefresh={handleRefresh} exp={exp} onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default TokenExpirationManager;