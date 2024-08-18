// import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
// type AuthUserProps = {
//     name: string;
//     email: string;
// };
const User = () => {
    // this if we know that user can be null
    // const [user, setUser] = useState<null | AuthUserProps>(null);
    // this if we know that user always not null called type assertion
    // const [user, setUser] = useState<AuthUserProps>({} as AuthUserProps);
    const userContext = useContext(UserContext);
    const handleLogin = () => {
        // setUser({ name: "Salem", email: "s@gmail.com" });
        // using context

        userContext.setUser({ name: "sam", email: "s@gy.com" });
    };
    const handleLogout = () => {
        // setUser(null);

        userContext.setUser(null);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is{userContext.user?.email}</div>
        </div>
    );
};
export default User;
