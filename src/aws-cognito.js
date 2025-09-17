import { cognito } from "./aws-config";

export async function createCognitoGroup(groupName) {
  const params = {
    GroupName: groupName,
    UserPoolId: process.env.COGNITO_USER_POOL_ID,
  };

  await cognito.createGroup(params).promise();
}

export async function assignUserToGroup(username, groupName) {
  const params = {
    GroupName: groupName,
    UserPoolId: process.env.COGNITO_USER_POOL_ID,
    Username: username,
  };

  await cognito.adminAddUserToGroup(params).promise();
}
