import React from 'react';
import Champion from '../Champion';
import Round from '../Round';

const Tournament = ({ complete }) => (
    <>
    { complete ? <Champion/> : <Round /> }
    </>
);         

export default Tournament;

