import React from "react";
import { Name } from "./Person.types";

type PersonListProps = {
    names: Name[];
};

const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map((name) => {
                return (
                    <div key={name.first}>
                        {name.first} {name.last} {`\n`}
                    </div>
                );
            })}
        </div>
    );
};

export default PersonList;
