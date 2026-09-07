"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const navItems = [
    { label: "Jacques Azianou", href: "/" },
    { label: "Selected works", href: "/about" },
    { label: "Archive", href: "/archive" },
    { label: "General Info", href: "/info" },
]

export default function Navbar() {
    const [time, setTime] = useState("")

    useEffect(() => {
        const updateTime = () => {
            const currentTime = new Intl.DateTimeFormat("en-NG", {
                timeZone: "Africa/Lagos",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            }).format(new Date())

            setTime(currentTime)
        }

        updateTime()

        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <header className="fixed top-0 w-full px-6 text-[13px] leading-1 tracking-[-0.5%] font-medium">
            <nav className="flex h-17 items-center justify-between">
                <ul className="flex space-x-4">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="hover:opacity-50 transition-opacity ease duration-300">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <p className="time uppercase">
                    WAT {time}
                </p>
            </nav>
        </header>
    )
}

