import React from 'react';
import { useState,useCallback} from 'react';
import Count from './Count';
import Button from './Button';
import Salary from './Salary';

const Parent = () => {
    console.log('Rendering Parent - ');
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(0);

    const increaseAge = useCallback(() => {
        setAge(age + 1);
    },[age]);

    const increaseSalary = useCallback(() => {
        setSalary(salary + 1000);
    },[salary]);

    return (
        <div>
            <h1>Use Callback Hook</h1>
            <Count text="Age" count={age}/>
            <Button handleClick={increaseAge}>Increase Age</Button>
            <Salary text="Salary" salary={salary}/>
            <Button handleClick={increaseSalary}>Increase Salary</Button>
        </div>
    );
};

export default Parent;