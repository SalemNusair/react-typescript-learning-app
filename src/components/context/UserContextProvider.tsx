import React, { useState, createContext } from "react";

type UserContextProviderProps = {
    children: React.ReactNode;
};
type AuthUser = {
    name: string;
    email: string;
};
type UserContext = {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
export const UserContext = createContext({} as UserContext);
const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContextProvider;
