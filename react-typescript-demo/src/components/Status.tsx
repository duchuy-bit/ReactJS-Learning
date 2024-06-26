import React from "react";

type StatusProps = {
    status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
    let message;
    if (props.status === "loading") {
        message = "Loading ...";
    } else if (props.status === "success") {
        message = "Data fetch successfully!";
    } else if (props.status === "error") {
        message = "Error fetching Data!";
    }

    return <div>Status: {message}</div>;
};

export default Status;
