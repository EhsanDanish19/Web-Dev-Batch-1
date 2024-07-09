import React from 'react';

const CompA = () => {
    const Data = "Data from component A"
    return (
        <React.Fragment>
                <div>Component A</div>
                <CompA data={Data}/>
            </React.Fragment>
    );
}

export default CompA;
