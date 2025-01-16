import React, { useState } from "react";

interface PhoneInputProps {
    value: string;
    onChange: (value: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange }) => {
    const [isTyping, setIsTyping] = useState(!!value);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cleanedValue = e.target.value.replace(/[^0-9]/g, "");
        onChange(cleanedValue);
        setIsTyping(cleanedValue.length > 0);
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
            }}
        >
            <input
                type="text"
                placeholder="Phone number"
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
                    onClick={() => onChange("")}
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

export default PhoneInput;
