import React from "react";
import Greet from "../Greet";
/*  extract props from other component  */

const CusomtComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>
            {props.isLoggedIn ? (
                <p>{props.name}</p>
            ) : (
                <p>{props.messageCounts}</p>
            )}
        </div>
    );
};
export default CusomtComponent;
