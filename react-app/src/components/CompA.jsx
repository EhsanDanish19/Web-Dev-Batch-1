import React from 'react';
import CompB from './CompB';

const CompA = () => {
    // const Data = "Data from component A"
    const UserData =[
        {name:"Ali",age:24,email:"ali@gmail.com"},
        {name:"Kareem", age:33, email:'kareem@gmail.com'},
        {name:'Anwar',age:26, email:'anwar@gmail.com'}
    ];
    return (
        <React.Fragment>
            <div>Component A</div>
            {UserData.map((user,index)=>(
                <CompB 
                key={index}
                Name={user.name}
                Age={user.age}
                Email={user.email}
                />
            ))}
            {/* <CompB data={Data}/> */}
        </React.Fragment>
    );
}

export default CompA;
