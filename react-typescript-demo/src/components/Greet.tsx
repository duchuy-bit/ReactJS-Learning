import React from "react";

type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggin: boolean;
};

const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props;

    return (
        <div>
            <h2>
                {props.isLoggin
                    ? `Welcome ${props.name} to my website \You have ${messageCount} messages`
                    : `Welcome guest `}
            </h2>
            <h2></h2>
        </div>
    );
};

export default Greet;
