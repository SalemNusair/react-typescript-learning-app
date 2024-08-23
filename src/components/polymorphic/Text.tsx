import React from "react";
type TextOwnProps<E extends React.ElementType> = {
    color?: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    children: React.ReactNode;
    as?: E; // this for html tags
};
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;
const Text = <E extends React.ElementType = "div">({
    children,
    size,
    color,
    as,
}: TextProps<E>) => {
    const Component = as || "div";
    return (
        <Component className={`class-with-${size}-${color}`}>
            {children}
        </Component>
    );
};
export default Text;
