"use client"

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "./navbar"; // tu navbar original
import SearchBar from "../searchBar";
import { Button } from "@/components/ui/button";
import { FaRegUserCircle } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex-col bg-white m-0">
      {/* Sección superior */}
      <div className="flex items-center justify-between p-4 md:justify-center gap-4">
        {/* Logo */}
        <Image
          src="/assets/retrocloset-logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        {/* Barra de búsqueda (solo desktop) */}
        <div className="hidden md:block w-1/2">
          <SearchBar />
        </div>

        {/* Botones sesión (solo desktop) */}
        <div className="hidden md:flex justify-between gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push("/sign-in")}
          >
            <FaRegUserCircle className="mr-1" />
            Iniciar Sesión
          </Button>
          <div className="border-l h-6 mx-2"></div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push("/sign-up")}
          >
            Registrarse
          </Button>
        </div>

        {/* Botón menú móvil */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4">
              <SheetHeader>
                <SheetTitle>Menú</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                {/* Logo dentro del menú móvil */}
                <Image
                  src="/assets/retrocloset-logo.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  onClick={() => router.push("/")}
                />

                {/* Navbar en móvil */}
                <Navbar type="mobile"/>

                {/* Barra de búsqueda en móvil */}
                <SearchBar />

                {/* Botones en móvil */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push("/sign-in")}
                >
                  <FaRegUserCircle className="mr-1" />
                  Iniciar Sesión
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push("/sign-up")}
                >
                  Registrarse
                </Button>


              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Navbar en desktop */}
      <div className="hidden md:flex justify-center">
        <Navbar type="desktop" />
      </div>

      <div className="border-t w-full mt-2"></div>
    </div>
  );
};

export default Header;
