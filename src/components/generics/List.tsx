type ListProps<T> = {
    items: T[];
    onClick: (value: T) => void;
};
const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <h1>List of Items</h1>
            {items.map((item) => (
                <div
                    style={{
                        cursor: "pointer",
                        width: "100px",
                        height: "50px",
                        borderRadius: "50px",
                        background: "#cccc",
                        borderColor: "black",
                        borderWidth: "2px",
                        margin: "10px",
                        padding: "10px",
                        textAlign: "center",
                    }}
                    key={item.id}
                    onClick={() => onClick(item)}
                >
                    {item.id}
                </div>
            ))}
        </div>
    );
};
export default List;
