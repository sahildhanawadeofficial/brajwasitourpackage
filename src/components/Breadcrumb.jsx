'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaAngleRight } from 'react-icons/fa'; // import icons from react-icons

export default function Breadcrumb() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    const breadcrumbs = pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        return {
            label: decodeURIComponent(segment.replace(/-/g, ' ')),
            href,
        };
    });

    const title = breadcrumbs.length > 0
        ? breadcrumbs[breadcrumbs.length - 1].label
        : 'Home';

    return (
        <section className="gauto-breadcromb-area section_70" style={{ padding: '70px 0', backgroundColor: '#f5f5f5' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="breadcromb-box">
                            <h1 className="text-capitalize">{title}</h1>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <FaHome style={{ marginRight: 5 }} />
                                        Home
                                    </Link>
                                </li>
                                {breadcrumbs.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <li><FaAngleRight /></li>
                                        {index < breadcrumbs.length - 1 ? (
                                            <li>
                                                <Link href={item.href}>
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ) : (
                                            <li className="text-capitalize">{item.label}</li>
                                        )}
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
