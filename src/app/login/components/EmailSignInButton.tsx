import React from "react";

const buttonStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    borderRadius: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    fontFamily: "Poppins, sans-serif",
    fontSize: "20px",
    marginTop: "10px",
    width: "100%",
};

const iconStyles: React.CSSProperties = {
    marginRight: "8px",
};

export const GoogleSignInButton: React.FC = () => (
    <div style={buttonStyles}>
        <span style={iconStyles}>🌐</span>
        Sign in with Google
    </div>
);

export const PhoneSignInButton: React.FC = () => (
    <div style={buttonStyles}>
        <span style={iconStyles}>📞</span>
        Sign in with Phone
    </div>
);

export const EmailSignInButton: React.FC = () => (
    <div style={buttonStyles}>
        <span style={iconStyles}>✉️</span>
        Sign in with Email
    </div>
);
