import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import Counter from "./components/state/Counter";
import { ThemeContextProvider } from "./components/state/ThemeContext";
import Box from "./components/state/Box";
import { UserContextProvider } from "./components/state/UserContext";
import User3 from "./components/state/User3";
import CounterClass from "./components/class/Counter";
import Login from "./components/class/Login";
import Private from "./components/class/Private";
import Profile from "./components/class/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateliteral.tsx/Toast";
import ButtonHTML from "./components/html/Button";
import CustomComponent from "./components/html/CustomComponent";
import TextPolyMorphic from "./components/polymorphic/Text";

function App() {
    const personName = {
        first: "Rock",
        last: "Lee",
    };

    const nameList = [
        {
            first: "Rock1",
            last: "Lee1",
        },
        {
            first: "Rock2",
            last: "Lee2",
        },
        {
            first: "Rock3",
            last: "Lee3",
        },
    ];

    return (
        <div className="App">
            <Greet name="Dev Panda" messageCount={10} isLoggin={true} />
            <Greet name="Dev Panda" isLoggin={true} />

            <Person name={personName} />
            <PersonList names={nameList} />

            <Status status="loading" />

            <Heading>Placeholder text</Heading>

            <Oscar>
                <Heading>Oscar goes to Leonardo Dicpario</Heading>
            </Oscar>

            <Button
                // handleClick={() => {
                //     console.log("Button Clicked ");
                // }}
                handleClick={(event, id) => {
                    console.log("Button Clicked ", event, id);
                }}
            />

            <Input
                value=""
                handleChange={(event) => {
                    console.log(event);
                }}
            />

            <Container styles={{ border: "1px solid black", padding: "1rem" }} />

            <LoggedIn />

            <User />

            <Counter />

            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>

            <UserContextProvider>
                <User3 />
            </UserContextProvider>

            <CounterClass message="Count:" />

            <Private isLoggedIn={true} component={Profile} />

            {/* <List items={["Batman", "SuperMan", "Wonder Woman"]} onClick={(item) => console.log(item)} />
            <List items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} /> */}
            <List
                items={[
                    {
                        id: 1,
                        first: "Rock1",
                        last: "Lee1",
                    },
                    {
                        id: 2,
                        first: "Rock2",
                        last: "Lee2",
                    },
                    {
                        id: 3,
                        first: "Rock3",
                        last: "Lee3",
                    },
                ]}
                onClick={(item) => console.log(item)}
            />

            {/* <RandomNumber value={10} isPositive isNegative isZero /> */}
            <RandomNumber value={10} isPositive />

            <Toast position="center" />

            {/* <ButtonHTML variant="primary" onClick={() => console.log("clicked")}>
                <div>Primary Button</div>
            </ButtonHTML> */}

            <ButtonHTML variant="primary" onClick={() => console.log("clicked")}>
                Primary Button
            </ButtonHTML>

            <CustomComponent isLoggin={true} name="ok" />

            <TextPolyMorphic as="h1" size="lg">
                Heading
            </TextPolyMorphic>
            <TextPolyMorphic as="p" size="md">
                Paragraph
            </TextPolyMorphic>
            <TextPolyMorphic as="label" htmlFor="someID" size="sm" color="secondary">
                Label
            </TextPolyMorphic>
        </div>
    );
}

export default App;
