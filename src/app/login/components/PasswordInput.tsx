import React, { useState } from "react";

interface PasswordInputProps {
    value: string;
    onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);

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
                borderColor: isFocused ? "gray" : "#ddd",
            }}
        >
            <input
                type="password"
                placeholder="Enter your password"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                    flex: 1,
                    fontSize: "16px",
                    border: "none",
                    outline: "none",
                    fontFamily: "Poppins, sans-serif",
                }}
            />
            {value && (
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

export default PasswordInput;
