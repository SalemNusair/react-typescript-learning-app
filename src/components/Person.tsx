type PersonTypes = {
    name: {
        first: string;
        last: string;
    };
};
const Person = ({ name }: PersonTypes) => {
    return (
        <div>
            {name.first} {name.last}
        </div>
    );
};
export default Person;
