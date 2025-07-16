import React from 'react';
import Parent from './Parent';
import { useContext } from 'react';
import { FamilyContext } from './FamilyContext';

const Family = ({familyName}) => {
    const  message = useContext(FamilyContext);
    return (
        <div className="bg-gray-200 p-[14px] m-[14px] flex" style={{border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>   
            <h1>Family Component {message.familyName}</h1>
            <Parent />
        </div>
    );
};

export default Family;