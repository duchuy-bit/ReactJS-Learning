import React from "react";

type InputProps = React.ComponentProps<"input">;

const InputHTML = (props: InputProps) => {
    return <input {...props} />;
};

export default InputHTML;
