import React from "react";

type TextParentProps = {
    children: React.ReactNode; // for components children
};
const TextParent = ({ children }: TextParentProps) => {
    return <div>{children}</div>;
};
export default TextParent;
