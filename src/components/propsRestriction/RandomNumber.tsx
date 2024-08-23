type RandomNumberType = {
    value: number;
};
type PositiveNumber = RandomNumberType & {
    isPositive: boolean;
    isNegative?: boolean;
    isZero?: boolean;
};
type NegativeNumber = RandomNumberType & {
    isNegative: boolean;
    isPositive?: boolean;
    isZero?: boolean;
};
type Zero = RandomNumberType & {
    isZero: boolean;
    isNegative?: boolean;
    isPositive?: boolean;
};
type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

const RandomNumber = ({
    value,
    isNegative,
    isPositive,
    isZero,
}: RandomNumberProps) => {
    return (
        <>
            <hr />
            <h1>Props Restricting</h1>
            <div>
                {value} {isPositive && "Positive"}
                {isNegative && "Negative"} {isZero && "Zero"}
            </div>
        </>
    );
};
export default RandomNumber;
