type GreetProps = {
    name: string;
    messageCounts?: number; // the ? it means this props is optional
    isLoggedIn: boolean;
};
const Greet = ({ name, messageCounts, isLoggedIn }: GreetProps) => {
    messageCounts = 0;
    return (
        <div>
            <h2>
                {isLoggedIn
                    ? `Welcome ${name}! you have ${messageCounts} unread
            messages`
                    : "Welcome Guest"}
            </h2>
        </div>
    );
};
export default Greet;
