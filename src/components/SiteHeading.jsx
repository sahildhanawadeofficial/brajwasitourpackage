import React from 'react';

const SiteHeading = ({ tagline, title }) => {
    return (
        <div className="site-heading">
            {tagline && (
                <span className="site-title-tagline">
                    {/* You might want to replace this with a proper icon component if using a React icon library */}
                    {/* <i className="flaticon-travel"></i> */}
                    {tagline}
                </span>
            )}
            <h2 className="site-title">{title}</h2>
            <div className="heading-divider"></div>
        </div>
    );
};

export default SiteHeading;