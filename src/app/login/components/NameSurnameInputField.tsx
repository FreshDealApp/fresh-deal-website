import React, { useState } from "react";

interface NameSurnameInputFieldProps {
    value: string;
    onChange: (value: string) => void;
}

const NameSurnameInputField: React.FC<NameSurnameInputFieldProps> = ({
                                                                         value,
                                                                         onChange,
                                                                     }) => {
    const [isTyping, setIsTyping] = useState(!!value);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cleanedText = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Only allow letters and spaces
        onChange(cleanedText);
        setIsTyping(cleanedText.length > 0);
    };

    const handleClearInput = () => {
        onChange("");
        setIsTyping(false);
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ddd",
                borderRadius: "16px",
                padding: "10px 15px",
                backgroundColor: "#fff",
                width: "100%",
                height: "50px",
                borderColor: isTyping ? "gray" : "#ddd",
            }}
        >
            <input
                type="text"
                placeholder="Enter your name"
                value={value}
                onChange={handleInputChange}
                style={{
                    flex: 1,
                    fontSize: "16px",
                    border: "none",
                    outline: "none",
                    fontFamily: "Poppins, sans-serif",
                }}
            />
            {isTyping && (
                <button
                    onClick={handleClearInput}
                    style={{
                        background: "none",
                        border: "none",
                        color: "#999",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    ✕
                </button>
            )}
        </div>
    );
};

export default NameSurnameInputField;
