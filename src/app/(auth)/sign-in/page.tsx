import React from "react";
import AuthForm from "@/components/AuthForm";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 items-center justify-start mx-auto max-w-7xl min-h-screen max-sm:px-4 max-sm:py-8">
        <div className="flex flex-col items-center">
          <Image
            className="m-0 p-0"
            alt="Logo"
            src="/assets/retrocloset-logo.png"
            height={200}
            width={200}
          />
          <h1 className="text-4xl font-bold text-center">¡Bienvenido de nuevo!</h1>
        </div>
        <AuthForm type="sign-in" />
      </div>
    </div>
  );
};

export default page;
