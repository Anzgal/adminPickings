import React from 'react';
import { Auth } from "aws-amplify";

type AuthProps = {
  isAuthenticated: Boolean;
  authenticate: Function;
  signout: Function;
};

export const AuthContext = React.createContext({} as AuthProps);

const isValidToken = async () => {
  /* const token = localStorage.getItem('pickbazar_token');
  const user = await Auth.currentAuthenticatedUser();
  console.log("user client: ", user);
  // JWT decode & check token validity & expiration.
  if (token) return true;
  return false; */

  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user client: ", user);

    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }

};

const AuthProvider = (props: any) => {
  const [isAuthenticated, makeAuthenticated] = React.useState<Boolean>();
  React.useEffect(() => {
    const fetch = async () => {
      const user = await Auth.currentAuthenticatedUser();
      //const isV = await isValidToken();
      makeAuthenticated(user ? true : false)
    }

    fetch();

  }, [])
  async function authenticate({ username, password }, cb) {
    /* makeAuthenticated(true);
    localStorage.setItem('pickbazar_token', `${username}.${password}`); */
    //console.log("EMAILPASS", username, password);
    

    try {
      const user = await Auth.signIn(username, password);
      console.log("user", user);
      makeAuthenticated(true);
    } catch (error) {
      console.log("ERROR", error);      
    }
    
    //setTimeout(cb, 100); // fake async
  }
  async function signout(cb) {
    /* makeAuthenticated(false);
    localStorage.removeItem('pickbazar_token');
    setTimeout(cb, 100); */

    try {
      await Auth.signOut();
      
      makeAuthenticated(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        signout,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
