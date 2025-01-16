"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // For animations
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import LoginModal from "@/src/app/login/components/LoginModal";
import RegisterModal from "@/src/app/login/components/RegisterModal";

const LoginPage: React.FC = () => {
    const [showImage, setShowImage] = useState(true);
    const [activeModal, setActiveModal] = useState<"login" | "register">("login");
    const { token } = useSelector((state: RootState) => state.user);
    const router = useRouter();

    useEffect(() => {
        // Redirect to home if the user is logged in
        if (token) {
            router.push("/home");
        }
    }, [token, router]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#B2F7A5] to-[#ecffe8]">
            {/* Image Animation */}
            {showImage && (
                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="flex justify-center mb-6"
                >
                    <Image
                        src="/assets/images/logo.png" // Ensure your logo is in the public folder
                        alt="Logo"
                        width={150}
                        height={150}
                    />
                </motion.div>
            )}

            {/* Modals */}
            <motion.div
                initial={{ opacity: 0, translateY: "100%" }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1.5 }}
                className="w-full max-w-md bg-white rounded-t-3xl shadow-md p-6"
            >
                {activeModal === "login" ? (
                    <LoginModal switchToRegister={() => setActiveModal("register")} />
                ) : (
                    <RegisterModal switchToLogin={() => setActiveModal("login")} />
                )}
            </motion.div>
        </div>
    );
};

export default LoginPage;
