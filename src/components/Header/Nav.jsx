/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

function Nav({ useScaleYRef }) {

    const links = [
        {
            id: 1,
            text: 'Home',
            link: '/home'
        },
        {
            id: 2,
            text: 'Our Solution',
            link: '/home'
        },
        {
            id: 3,
            text: 'Virtual Booth',
            link: '/Resources'
        },
        {
            id: 4,
            text: 'Resources',
            link: '/Resources'
        },
        {
            id: 5,
            text: 'About Us',
            link: '/Resources'
        },
        {
            id: 6,
            text: 'Contact Us',
            link: '/Resources'
        },
    ]

    return (
        <nav>
            <ul className="grid grid-flow-col text-base gap-4 font-400 items-center">
                {
                    links.map(link => {
                        return (
                            <li key={link.id} ref={(el) => (useScaleYRef.current[`navItem${link.id}`] = el)}>
                                <Link>
                                    {link.text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default React.memo(Nav)