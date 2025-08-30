import React from 'react'
import { ReactNode } from 'react'

const AuthLayout = async ({children}: {children: ReactNode}) => {
  return (
    <div className='bg-[conic-gradient(at_top,_#111827,_#f3f4f6,_#111827)]'>
        {children}
    </div>
  )
}

export default AuthLayout