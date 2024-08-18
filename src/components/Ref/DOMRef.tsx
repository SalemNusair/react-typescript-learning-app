import { useRef, useEffect } from "react";
const DOMRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return <input type="text" ref={inputRef} />;
};
export default DOMRef;
