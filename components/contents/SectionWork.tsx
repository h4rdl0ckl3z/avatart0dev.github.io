"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from 'react'

export const SectionWork = () => {
    const { theme } = useTheme();
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    const border = theme === 'light' ? 'border-black' : 'border-white';
    const bg = theme === 'light' ? 'bg-black' : 'bg-white';
    return (
        <section id="work" className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-center mb-4">Work</h2>
            </div>
            <div className="relative w-4/4 py-4 pr-4">
                <div className={isClient ? `absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 ${border}` : ''}></div>

                <div className="flex items-center mb-8">
                    <div className="w-1/2 text-right pr-8">
                        <p className="text-lg">2024</p>
                    </div>
                    <div className="relative w-1/2">
                        <div className={isClient ? `absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 ${bg} rounded-full` : ''}></div>
                        <div className="ml-8">
                            <p className="mb-4">Lorem ipsum dolor sit amet.</p>
                            <p className="mb-4">Consectetur adipiscing elit.</p>
                            <p className="mb-4">Sed do eiusmod tempor incididunt.</p>
                            <p className="mb-4">Ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center mb-8">
                    <div className="w-1/2 text-right pr-8">
                        <p className="text-lg">2023</p>
                    </div>
                    <div className="relative w-1/2">
                        <div className={isClient ? `absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 ${bg} rounded-full` : ''}></div>
                        <div className="ml-8">
                            <p className="mb-4">Lorem ipsum dolor sit amet.</p>
                            <p className="mb-4">Consectetur adipiscing elit.</p>
                            <p className="mb-4">Sed do eiusmod tempor incididunt.</p>
                            <p className="mb-4">Ut labore et dolore magna aliqua.</p>
                            <p className="mb-4">Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}