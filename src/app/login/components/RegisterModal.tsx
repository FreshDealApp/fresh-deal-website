"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/redux/store";

import { registerUserThunk } from "@/src/redux/thunks/userThunks";
import {setEmail, setName, setPassword, setPhoneNumber} from "@/src/redux/slices/userSlice";
import PasswordInput from "@/src/app/login/components/PasswordInput";
import EmailLoginField from "@/src/app/login/components/EmailLoginField";
import PhoneInput from "@/src/app/login/components/PhoneInput";
import DefaultButton from "@/src/app/login/components/DefaultButton";
import NameSurnameInputField from "@/src/app/login/components/NameSurnameInputField";

interface RegisterModalProps {
    switchToLogin: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ switchToLogin }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { name_surname, phoneNumber, email, password, loading } = useSelector(
        (state: RootState) => state.user
    );

    const handleRegister = async () => {
        if (!name_surname) {
            alert("Name and Surname are required.");
            return;
        }
        if (!phoneNumber && !email) {
            alert("Email or Phone Number is required.");
            return;
        }
        if (!password) {
            alert("Password is required.");
            return;
        }

        try {
            const result = await dispatch(
                registerUserThunk({
                    name_surname,
                    email,
                    phone_number: phoneNumber,
                    password,
                    role: "customer",
                })
            ).unwrap();
            alert("Registration successful!");
        } catch (error: any) {
            alert(error.message || "An error occurred.");
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Create an Account</h1>

            <NameSurnameInputField
                value={name_surname}
                setValue={(value) => dispatch(setName(value))}
            />
            <PhoneInput
                value={phoneNumber}
                setValue={(value) => dispatch(setPhoneNumber(value))}
            />
            <EmailLoginField
                value={email}
                setValue={(value) => dispatch(setEmail(value))}
            />
            <PasswordInput value={password}
                setValue={(value) => dispatch(setPassword(value))}
            />

            <DefaultButton
                onPress={handleRegister}
                title="Register"
                loading={loading}
            />
            <DefaultButton onPress={switchToLogin} title="Switch to Login" />

            {loading && <div>Loading...</div>}
        </div>
    );
};

export default RegisterModal;
