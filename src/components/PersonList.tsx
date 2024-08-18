type PersonListTypes = {
    names: {
        first: string;
        last: string;
    }[];
};
const PersonList = ({ names }: PersonListTypes) => {
    return (
        <div>
            {names.map(({ first, last }) => (
                <>
                    <h2>{first}</h2>
                    <h2>{last}</h2>
                </>
            ))}
            <h2></h2>
        </div>
    );
};
export default PersonList;
