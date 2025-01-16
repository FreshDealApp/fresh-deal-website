import React from "react";

interface DefaultButtonProps {
    onClick: () => void;
    title?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
                                                         onClick,
                                                         title = "Login",
                                                         children,
                                                         style,
                                                     }) => {
    return (
        <button
            style={{
                width: "100%",
                height: "50px",
                backgroundColor: "#b0f484",
                borderRadius: "16px",
                border: "none",
                boxShadow: "0 3px 4px rgba(0, 0, 0, 0.2)",
                fontSize: "18px",
                color: "#000",
                cursor: "pointer",
                fontFamily: "Poppins, sans-serif",
                ...style,
            }}
            onClick={onClick}
        >
            {title}
            {children}
        </button>
    );
};

export default DefaultButton;
