import React from 'react';

const Salary = ({text,salary}) => {
    console.log('Rendering Salary - ');
    return (
        <div>
            <h2>{text}-{salary}</h2>
        </div>
    );
};

export default React.memo(Salary);