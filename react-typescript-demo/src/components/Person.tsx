import React from "react";
import { PersonProps } from "./Person.types";

const Person = (props: PersonProps) => {
    return (
        <div>
            Your name: {props.name.first} {props?.name?.last}
        </div>
    );
};

export default Person;
