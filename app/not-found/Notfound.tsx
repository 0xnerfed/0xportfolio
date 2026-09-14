"use client"

import Link from "next/link"
import Image from "next/image"
import Footer from "../component/Footer/Footer"
import RightArrowCurved from "../component/icons/RightArrowCurved"


const navItems = [
    { label: "Back", href: "/", opacity: "100%" },
    { label: "Work", href: "/works", opacity: "50%" },
    { label: "About", href: "/info", opacity: "50%" },
    { label: "Notes", href: "/notes", opacity: "50%" },
    { label: "Home", href: "/home", opacity: "50%" },
    { label: "Archive", href: "/archive", opacity: "50%" },
]

export default function NotFound() {
    return (
        <>
            <section
                className="p-5 mt-16 h-[calc(100dvh-68px)] max-md:h-auto max-md:min-h-[calc(100dvh-68px)] flex flex-row w-full max-md:flex-col"
            >
                <main className="flex flex-col justify-between h-full shrink-0 grow-0 w-1/2 max-md:w-full max-md:h-auto max-md:min-h-[calc(100dvh-68px)] mb-10">
                    <div>
                        <h1 className="text-8xl max-md:text-4xl font-medium tracking-[-0.04em]">
                            404.
                        </h1>
                        <p className="mt-2 text-sm text-black-300 max-w-[40ch]">
                            The page you&apos;re looking for <br />doesn&apos;t exist or has moved.
                        </p>
                    </div>

                    <footer>
                        <nav aria-label="404 page navigation">
                            <ul className="flex flex-col gap-0.5 w-fit">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            style={{ opacity: item.opacity }}
                                            className="flex gap-[4.5px] items-center text-[12px] font-medium text-current rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current hover:opacity-100 transition-opacity"
                                        >
                                            <RightArrowCurved />
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="text-black-300 text-[12px] mt-15 leading-[1.3]">
                                Version <br />
                                ©2026
                            </div>
                        </nav>
                    </footer>
                </main>

                <article
                    aria-labelledby="magma-title"
                    className="flex w-full flex-col gap-4"
                >
                    <header>
                        <Link
                            href=""
                            className="size-11"
                            aria-hidden="true"
                        >
                            <Image
                                src="/assets/logo/Magma.svg"
                                width={44}
                                height={44}
                                alt=""
                            />
                        </Link>

                        <div className="mt-2.5">
                            <h3
                                id="magma-title"
                                className="text-sm font-medium"
                            >
                                Magma Inc.
                            </h3>

                            <p className="text-[12px] leading-4 text-black-300">
                                Interface Designer, 2025 — Present
                            </p>
                        </div>
                    </header>

                    <p className="text-xs leading-[1.4] text-black-300">
                        Magma Inc. is a startup in San Francisco working on cameras
                        that make it easy to look and sound professional on video
                        calls. Magma is focused on building the best cameras on the
                        market today.
                    </p>

                    <p className="text-xs leading-[1.4] text-black-300">
                        At Magma Inc. I led brand, digital product, and marketing
                        design efforts across the board, working with internal and
                        external teams. I built the companion app for macOS,
                        released a new device — the Opal Tadpole — and started
                        incubating new devices with the help of a new funding round
                        led by OpenAI.
                    </p>

                    <Link
                        href="/works/magma"
                        aria-label="View the Magma Inc. case study"
                        title="View the Magma Inc. case study"
                        className="
                group
                flex
                h-80
                w-full
                items-end
                justify-end
                overflow-hidden
                rounded-xl
                bg-[#E7E7E7]
                outline-none
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-black
                max-md:h-64
                max-sm:h-56
              "
                    >
                        <Image
                            src="/assets/preview/Magma-preview.png"
                            width={449.5}
                            height={337.13}
                            alt="Preview of the Magma Inc. brand and product design case study"
                            className="
                  h-auto
                  max-h-full
                  w-auto
                  max-w-full
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-[1.02]
                  group-focus-visible:scale-[1.02]
                "
                            priority
                        />
                    </Link>

                    <footer className="text-[12px] leading-[1.1]">
                        <p className="font-medium">
                            Magma Inc.
                        </p>

                        <p className="mt-1 text-black-300">
                            UI Design
                        </p>
                    </footer>
                </article>
            </section>

            <Footer />
        </>
    )
}
