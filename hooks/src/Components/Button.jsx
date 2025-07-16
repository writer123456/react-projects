import React from 'react';

const Button = ({handleClick,children}) => {
    console.log('Rendering Button - ', children);
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    );
};

const styles = {
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default React.memo(Button);