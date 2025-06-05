import React from 'react';

const TourTable = ({ data }) => {
    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Tour Packages</th>
                        <th>Duration</th>
                        <th colSpan="3">Taxi Price (All Estimates)</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Sedan</th>
                        <th>MUV</th>
                        <th>SUV</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.packageName}</td>
                            <td>{row.duration}</td>
                            <td>{row.sedanPrice}</td>
                            <td>{row.muvPrice}</td>
                            <td>{row.suvPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TourTable;