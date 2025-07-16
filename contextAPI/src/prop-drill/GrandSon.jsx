import React from 'react';
import { FamilyContext } from './FamilyContext';
import { useContext } from 'react';

function GrandSon({ familyName }) { 
    const message = useContext(FamilyContext);
    return(
        < div style={{border: '1px solid black', display:"flex-row", justifyContent:"center", alignItems:"center", margin:"3px"}} className="bg-gray-600 p-[4vh]">
        <h4>GrandSon {message.familyName}</h4>
        </div>
    )
}
export default GrandSon;