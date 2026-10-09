"use client";

import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";
import { sections } from "@/lib/navegation";

export function MobileMenu(){
    const [open, setOpen] = useState(false);

    return(
        <div className="md:hidden">
            <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="text-comb text-2xl p-2 md:hidden">
                {open ? <HiOutlineX /> : <RiMenu2Line />}
            </button>
            {open && (
                <nav className="absolute top-full left-0 mt-1 w-full rounded-sm border border-comb/15 bg-background/95 backdrop-blur-md p-2 shadow-xl transition-all md:hidden">
                    <div className="flex flex-col gap-1">
                        {sections.map((section) => (
                            <a key={section.id} 
                            href={`#${section.id}`}
                            onClick={() => setOpen(false)}
                            className="group flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-comb transition-all duration-150 hover:bg-comb/10">
                                <span>{section.name}</span>
                                <span className="text-xl text-comb/50">›</span>
                            </a>
                        ))}
                    </div>
                </nav>
            )}

        </div>
    )
}