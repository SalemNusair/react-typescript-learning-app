type PlaceholderTextProps = {
    children: string;
};
const PlaceholderText = ({ children }: PlaceholderTextProps) => {
    return <h2>{children}</h2>;
};
export default PlaceholderText;
