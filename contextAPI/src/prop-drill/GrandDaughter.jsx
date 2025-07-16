import React from 'react';

const GrandDaughter = ({familyName}) => {
    return (
        <div style={{border: '1px solid black', display:"flex-row", justifyContent:"center", alignItems:"center", margin:"3px"}} className="bg-gray-500 p-[4vh]">
            <h4>Grand Daughter {familyName}</h4>
        </div>
    );
};

export default GrandDaughter;