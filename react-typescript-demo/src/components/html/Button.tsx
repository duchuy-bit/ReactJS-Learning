import React from "react";

type ButtonProps = {
    variant: "primary" | "secondary";
    children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const ButtonHTML = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <button className={`class-with-${variant}`} {...rest}>
            {children}
        </button>
    );
};

export default ButtonHTML;
