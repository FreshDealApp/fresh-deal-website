"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/redux/store";

import {setEmail, setLoginType, setPassword, setPasswordLogin, setPhoneNumber} from "@/src/redux/slices/userSlice";
import { loginUserThunk } from "@/src/redux/thunks/userThunks";
import PhoneInput from "@/src/app/login/components/PhoneInput";
import PasswordInput from "@/src/app/login/components/PasswordInput";
import DefaultButton from "@/src/app/login/components/DefaultButton";
import EmailLoginField from "@/src/app/login/components/EmailLoginField";

interface LoginModalProps {
    switchToRegister: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ switchToRegister }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { phoneNumber, password, email, login_type, passwordLogin, loading, token } = useSelector(
        (state: RootState) => state.user
    );

    const handleLoginButton = async () => {
        if (!password) {
            alert("Password is required.");
            return;
        }
        if (login_type === "phone_number" && !phoneNumber) {
            alert("Phone number is required.");
            return;
        }
        if (login_type === "email" && !email) {
            alert("Email is required.");
            return;
        }

        try {
            const result = await dispatch(
                loginUserThunk({
                    email,
                    phone_number: phoneNumber,
                    password,
                    login_type,
                    password_login: passwordLogin,
                })
            ).unwrap();
            console.log("Login Successful:", result);
        } catch (error: any) {
            console.error("Login Failed:", error);
            alert(error.message || "An error occurred.");
        }
    };

    const handleLoginTypeChange = (type: "email" | "phone_number") => {
        dispatch(setLoginType(type));
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
            <p className="text-lg text-gray-600 mb-4">Please login to continue</p>

            {login_type === "phone_number" ? <PhoneInput
                value={phoneNumber}
                onChange={(value) => dispatch(setPhoneNumber(value))}
            /> : <EmailLoginField
                value={email}
            onChange={(value) => dispatch(setEmail(value))}
            />}
            {password && <PasswordInput value={password}                  onChange={(value) => dispatch(setPassword(value))}
            />}

            <DefaultButton
                onPress={handleLoginButton}
                title="Login"
                loading={loading}
            />

            <DefaultButton onPress={switchToRegister} title="Switch to Register" />
            <button
                className="text-blue-600 underline mt-2"
                onClick={() =>
                    handleLoginTypeChange(
                        login_type === "email" ? "phone_number" : "email"
                    )
                }
            >
                {login_type === "email"
                    ? "Switch to Phone Login"
                    : "Switch to Email Login"}
            </button>

            {loading && <div>Loading...</div>}
        </div>
    );
};

export default LoginModal;
