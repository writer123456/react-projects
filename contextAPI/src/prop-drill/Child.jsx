import React from 'react';
import GrandSon from './GrandSon';
import GrandDaughter from './GrandDaughter';
import { useContext } from 'react';
import { FamilyContext } from './FamilyContext';

const Child = ({ familyName }) => {
    const message = useContext(FamilyContext);
    return (
        <div style={{border: '1px solid black', display:"flex-row", justifyContent:"center", alignItems:"center", margin:"3px"}} className="bg-gray-400 p-[4vh] flex-row">
            <h3>Child Component {message.familyName}</h3>
            <GrandSon />
            {/* <GrandDaughter familyName={familyName}/> */}
        </div>
    );
};

export default Child;