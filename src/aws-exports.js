export const awsExports = {
  Auth: {
    Cognito: {
      region: process.env.REACT_APP_REGION,
      userPoolId: process.env.REACT_APP_USER_POOL_ID,
      userPoolClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID,
      identityPoolId:process.env.REACT_APP_IDENTITY_POOL_ID,
      signUpVerificationMethod: "code",
    },
  },
  Lambda: {
     userManagement: process.env.REACT_APP_USER_MANAGEMENT,
    //userManagement: "createTenant",
    queryManagement: process.env.REACT_APP_QUERY_MANAGEMENT,
    text2sql: process.env.REACT_APP_TEXT2SQL_LAMBDA,
    donorCompare: process.env.REACT_APP_DONORCOMPARE_LAMBDA,
  },
  S3: {
    region: process.env.REACT_APP_REGION,
    bucket: process.env.REACT_APP_BUCKET
  },
  API:{
    text2sqlAPI: process.env.REACT_APP_TEXT2SQL_API,
    numeroAPI: process.env.REACT_APP_NUMERO_API,
    fileSearchAPI: process.env.REACT_APP_FILE_SEARCH_API,
  }
};