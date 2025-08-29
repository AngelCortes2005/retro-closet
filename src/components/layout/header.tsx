'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Navbar from './navbar'
import SearchBar from '../searchBar'
import { Button } from "@/components/ui/button"
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const router = useRouter()

  return (
    <div className='flex-col '>
        <div className='flex items-center justify-center gap-10'>
            <Image src="/assets/retrocloset-logo.png" alt="Logo" width={100} height={100} 
      onClick={() => router.push('/')} />
            <SearchBar />
            <div className='flex justify-between gap-1'>
              <Button variant='outline' size='sm' onClick={() => router.push('/login')}>
                <FaRegUserCircle />Iniciar Sesión
              </Button>
               <div className="border-l h-8 mx-2"></div>
              <Button variant='outline' size='sm' onClick={() => router.push('/signup')}>
                Registrarse
              </Button>
            </div>

        </div>

        <div className='flex justify-center'>
            <Navbar/>
        </div> 

        
    </div>
  )
}

export default Header