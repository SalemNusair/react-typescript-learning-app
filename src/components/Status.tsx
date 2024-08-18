type StatusTypes = {
    status: "loading" | "success" | "error";
};
const Status = ({ status }: StatusTypes) => {
    let message;
    if (status === "loading") {
        message = "loading...";
    } else if (status === "success") {
        message = "Data Fetched successfully!";
    } else if (status === "error") {
        message = "Error Fetching data!";
    }
    return <div>{message}</div>;
};
export default Status;
