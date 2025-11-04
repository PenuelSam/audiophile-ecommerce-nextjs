"use client";
import React, { useState } from 'react'
import { Logo } from './logo'
import { NavLinks } from './nav-links'
import { CartTrigger } from './cart/cart-trigger'
import { CartModal } from './cart/cart-modal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
    

  return (
    <div className='w-full h-[97px] bg-black  px-[8px]  text-white z-50'>
       <div className="container-width h-full  ">
              <div className="flex items-center h-full justify-between  border-b border-white/10 py-8">
                <div className="flex items-center gap-6">
                  <button
                    type="button"
                    className="flex h-6 w-6 items-center justify-center text-white md:hidden"
                    aria-label="Toggle navigation"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
                      <path d="M0 0H16V1.5H0V0Z" fill="white" />
                      <path d="M0 6.75H16V8.25H0V6.75Z" fill="white" />
                      <path d="M0 13.5H16V15H0V13.5Z" fill="white" />
                    </svg>
                  </button>
                  <Logo />
                </div>
                <div className="hidden md:block">
                  <NavLinks />
                </div>
                <div className="flex items-center gap-6" >
                  <CartTrigger  onClick={() => setIsCartOpen(true)}/>
                </div>
              </div>
        </div>
        {isMenuOpen && (
                <div className="absolute inset-x-0 top-full bg-white px-6 pb-6 pt-4 shadow-soft md:hidden">
                  <NavLinks variant="dark" />
                </div>
              )}

               <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
