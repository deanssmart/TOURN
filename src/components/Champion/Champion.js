import React from 'react';

const Champion = ({ champion }) => (
    <>
        <h2 className="champion">{ `${champion} wins!`}</h2>
        <div class="laser-beam"></div>
        <div class="laser-beam yellow"></div>
        <div class="laser-beam blue-b"></div>
        <div class="laser-beam yellow-b"></div>
    </>
);

export default Champion;