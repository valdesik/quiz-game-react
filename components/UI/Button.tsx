import * as React from "react";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
                                           type = "button",
                                           onClick,
                                           disabled = false,
                                           children
                                       }) => {
    return (
        <button
            type={type}
            className="px-4 py-2 bg-blue-500 text-white rounded
            hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;