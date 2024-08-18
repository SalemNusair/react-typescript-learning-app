import React from "react";

type StyledComponentProps = {
    styles: React.CSSProperties;
};

const StyledComponent = ({styles}: StyledComponentProps) => {
    return <div style={styles}></div>;
};
export default StyledComponent;
