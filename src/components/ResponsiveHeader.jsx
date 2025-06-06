"use client"
import React, { useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { IconButton } from '@mui/material';
import { AiOutlineMenu } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'
import { CSSTransition } from 'react-transition-group'

const ResponsiveHeader = () => {
    const pathname = usePathname()
    const [dropDown, setDropDown] = useState({})
    const cartmenuref = useRef(null)
    const cartmenudivref = useRef(null)

    const navLinks = [
        { url: "/Portfolio", urlname: "Portfolio" },
        { url: "/#Packages", urlname: "Packages" },
        { url: "/#WhyChooseUs", urlname: "Why Choose Us" },
    ]

    return (
        <header className='paddingrl'>
            <div className="navdiv1">
                <Link href="/">
                    <Image
                        src="/images/sdsoftwarelogo2.svg"
                        alt="Hostinger"
                        fill
                        priority
                    />
                </Link>
            </div>

            <nav className="navlinksdiv">
                {navLinks.map((val) => (
                    <Link
                        key={val.url}
                        href={val.url}
                        data-active={val.url === pathname}
                    >
                        {val.urlname}
                    </Link>
                ))}
            </nav>

            <IconButton
                onClick={() => setDropDown({ cartmenu: !dropDown.cartmenu })}
                variant="outlined"
                className='menuicon'
            >
                <AiOutlineMenu />
            </IconButton>

            <div ref={cartmenudivref} className="cartmenudiv">
                <CSSTransition
                    nodeRef={cartmenuref}
                    timeout={300}
                    in={dropDown.cartmenu}
                    classNames="carttransiton"
                >
                    <div ref={cartmenuref} className="cartmenu">
                        <div className="cartmenudiv1">
                            <ImCancelCircle
                                className='cancelicon'
                                onClick={() => setDropDown({ cartmenu: false })}
                            />
                        </div>

                        <nav className="sidebarlinks">
                            {navLinks.map((val) => (
                                <Link
                                    key={val.url}
                                    href={val.url}
                                    data-active={val.url === pathname}
                                    onClick={() => setDropDown({ cartmenu: false })}
                                >
                                    {val.urlname}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </CSSTransition>
            </div>
        </header>
    )
}

export default ResponsiveHeader