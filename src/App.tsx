import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import PlaceholderText from "./components/Children/PlaceholderText";
import TextParent from "./components/Children/TextParent";
import "./App.css";
import Button from "./components/Events/Button";
import Input from "./components/Events/Input";
import StyledComponent from "./components/StyledComponent";
import User from "./components/state/User";
import Counter from "./components/state/Counter";
import { Counter as CounterClassComponent } from "./components/class/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContextProvider";
import UserContextProvider from "./components/context/UserContextProvider";
import Box from "./components/context/Box";
import MutableRef from "./components/Ref/MutableRef";

function App() {
    const personName = {
        first: "Bruce",
        last: "Wayne",
    };
    const personList = [
        {
            first: "Bruce",
            last: "Wayne",
        },
        {
            first: "Ali",
            last: "Saleh",
        },
        {
            first: "Mohammed",
            last: "Abdullah",
        },
    ];
    return (
        <>
            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>
            <UserContextProvider>
                <User />
            </UserContextProvider>

            {/* assign specific string values */}
            <Status status="error" />
            {/* children text */}
            <PlaceholderText>hlllo</PlaceholderText>
            {/* children componet */}
            <TextParent>
                <PlaceholderText>Hello baby</PlaceholderText>
            </TextParent>
            {/* string, numbers, boolean and how to make a prop optional */}
            <Greet name="Salem" messageCounts={20} isLoggedIn={true} />
            {/* object */}
            <Person name={personName} />
            {/* array of objects */}
            <PersonList names={personList} />
            {/* -------------------------------------------- */}
            {/* events----------------------------------- */}
            <Button
                handleClick={(event, id) => {
                    console.log("clicked", event, id);
                }}
            />
            <Input value="" handleChange={(event) => console.log(event)} />
            {/* Styles */}
            <StyledComponent styles={{ background: "#ccccc", margin: "1px" }} />
            {/* types for useState hook */}

            <User />
            {/* types of useReducer hook */}
            <Counter />
            {/* useRef */}
            <MutableRef />
            {/* Class components */}
            <CounterClassComponent message="hello I'm class component" />
        </>
    );
}

export default App;
