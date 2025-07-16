import React from 'react';
import Child from './Child';
import { FamilyContext } from './FamilyContext';
import { useContext } from 'react';

const Parent = ({familyName}) => {
    const message = useContext(FamilyContext);
    return (
        <div style={{border: '1px solid black', display:"flex-row", justifyContent:"center", alignItems:"center", margin:"3px"}} className="bg-gray-300 p-[4vh] flex-row">
            <h2>Parent Component {message.familyName}</h2>
            <Child familyName={familyName}/>
        </div>
    );
};

export default Parent;