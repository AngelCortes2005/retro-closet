'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'


const AuthForm = ({ type }: { type: FormType}) => {
    const isSignIn = type === "sign-in";
    const router = useRouter();
  return (
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle>{isSignIn ? "Inicia sesion en tu cuenta" : "Registrate"}</CardTitle>
        <CardDescription>
          {isSignIn ? "Ingresa tu Email y Contraseña para iniciar sesion" 
          : 
          "Ingresa tu Email y confirma tu Contraseña para registrarte"}
        </CardDescription>
        <CardAction>
          {isSignIn ? 
        <Button variant="link" onClick={() => router.push('/sign-up')}>Registrarme</Button>
        :
        <Button variant="link" onClick={() => router.push('/sign-in')}>Iniciar Sesion</Button>
        }
          
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
                {isSignIn ? <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Olvidaste tu contraseña?
                </a>
                :
                null
                }
                
              </div>
              <Input id="password" type="password" required />
            </div>
            {isSignIn ? null : 
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Confirmar Contraseña</Label>
              </div>
                <Input id="password" type="password" required />
            </div>
            }
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          {isSignIn ? "Iniciar Sesion" : "Registrarme"}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default AuthForm