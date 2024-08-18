import React from "react";

type ButtonProps = {
    handleClick: (
        events: React.MouseEvent<HTMLButtonElement>,
        id: number
    ) => void; //function doesn't return anything
};
const Button = ({handleClick}: ButtonProps) => {
    return (
        <button onClick={(event) => handleClick(event, 1)}>
            Click me
        </button>
    );
};
export default Button;
