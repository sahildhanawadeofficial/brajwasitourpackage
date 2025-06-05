// components/Breadcrumb.jsx
import Link from 'next/link';
import PropTypes from 'prop-types'; // Recommended for type checking props
import React from 'react';

/**
 * Renders a breadcrumb navigation component.
 *
 * @param {object} props - The component props.
 * @param {string} props.title - The title to display as the current page.
 * @param {Array<object>} props.items - An array of breadcrumb items.
 * @param {string} props.items[].label - The display label for the breadcrumb item.
 * @param {string} props.items[].href - The URL for the breadcrumb item.
 */
export default function Breadcrumb({ title, items }) {
    return (
        <section className="gauto-breadcromb-area section_70" style={{ padding: '70px 0', backgroundColor: '#f5f5f5' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="breadcromb-box">
                            <h1>{title}</h1>
                            <ul>
                                <li>
                                    <i className="fa fa-home"></i> {/* Assumes Font Awesome is loaded globally */}
                                </li>
                                {items.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <li>
                                            <Link href={item.href} >
                                                {item.label}
                                            </Link>
                                        </li>
                                        {index < items.length - 1 && (
                                            <li>
                                                <i className="fa fa-angle-right"></i>
                                            </li>
                                        )}
                                    </React.Fragment>
                                ))}
                                <li>
                                    <i className="fa fa-angle-right"></i> {/* Separator before the current page */}
                                </li>
                                <li>{title}</li> {/* Current page title */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Optional: Add PropTypes for prop validation
Breadcrumb.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
};