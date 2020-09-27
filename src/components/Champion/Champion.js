import React from 'react';

const Champion = ({ champion }) => (
    <>
        <h2 className="champion">{ `${champion} wins!`}</h2>
        <div className="laser-beam"></div>
        <div className="laser-beam yellow"></div>
        <div className="laser-beam blue-b"></div>
        <div className="laser-beam yellow-b"></div>
    </>
);

export default Champion;