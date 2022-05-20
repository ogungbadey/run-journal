import { createContext, useContext, useState } from "react";
import { fakeAuthProvider } from "../auth/fakeAuthProvider";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signin = (userData, cb) => {
    return fakeAuthProvider.signin(() => {
      setUser(userData );
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      cb();
    });
  };
  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
