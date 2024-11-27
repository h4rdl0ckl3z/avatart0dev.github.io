"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';
import classNames from 'classnames';

export const SectionWork = () => {
    const { theme } = useTheme();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const border = theme === 'light' ? 'border-black' : 'border-white';
    const bg = theme === 'light' ? 'bg-black' : 'bg-white';

    const events = [
        { year: '2024', details: ['Lorem ipsum dolor sit amet.', 'Consectetur adipiscing elit.', 'Sed do eiusmod tempor incididunt.', 'Ut labore et dolore magna aliqua.'] },
        { year: '2023', details: ['Lorem ipsum dolor sit amet.', 'Consectetur adipiscing elit.', 'Sed do eiusmod tempor incididunt.', 'Ut labore et dolore magna aliqua.', 'Ut enim ad minim veniam.'] }
    ];

    const EventItem = ({ year, details }: { year: string, details: string[] }) => (
        <div className="flex items-center mb-8">
            <div className="w-1/2 text-right pr-8">
                <p className="text-lg">{year}</p>
            </div>
            <div className="relative w-1/2">
                <div className={classNames('absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full', bg)}></div>
                <div className="ml-8">
                    {details.map((detail, index) => (
                        <p key={index} className="mb-4">{detail}</p>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section id="work" className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-center mb-4">Work</h2>
            </div>
            <div className="relative w-full py-4 pr-4">
                <div className={classNames('absolute left-1/2 transform -translate-x-1/2 h-full border-l-2', isClient ? border : 'border-transparent')}></div>
                {events.map((event, index) => (
                    <EventItem key={index} year={event.year} details={event.details} />
                ))}
            </div>
        </section>
    );
}
