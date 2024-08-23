type VericalPosition = "top" | "center" | "bottom";
type HorizintalPosition = "left" | "center" | "right";
type ToastProps = {
    position:
        | Exclude<`${VericalPosition}-${HorizintalPosition}`, "center-center">
        | "center";
};
const Toast = ({ position }: ToastProps) => {
    return <div>Toast Notification Position - {position}</div>;
};
export default Toast;
