/* eslint-disable-line */ const aws = require('aws-sdk');

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
});

exports.handler = async event => {
 
  console.log("EVENT:", event.request.userAttributes["custom:user_type"]);

  const groupParams = {
    GroupName: event.request.userAttributes["custom:user_type"] === "USER" ? 'User' : 'Tipster' ,
    UserPoolId: event.userPoolId,
  };
  const addUserParams = {
    GroupName: event.request.userAttributes["custom:user_type"] === "USER" ? 'User' : 'Tipster',
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };
  /**
   * Check if the group exists; if it doesn't, create it.
   */
  try {
    await cognitoidentityserviceprovider.getGroup(groupParams).promise();
  } catch (e) {
    await cognitoidentityserviceprovider.createGroup(groupParams).promise();
  }
  /**
   * Then, add the user to the group.
   */
  await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();

  return event;
};
