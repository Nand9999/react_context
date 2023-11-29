import React,{useState} from 'react';

import PackageContext from'./context';

const Provider = (props) => {

    const [mission,setMission]=useState({
        mname:"Learn React",
        agent: '072',
        accept : 'not accepted'
});
    return (
        <PackageContext.Provider value ={{
            data : mission,
            isMissionAccepted: () => {
                setMission({...mission,accept:"accepted"})
            }
        }}>
            {props.children}
        </PackageContext.Provider>
    )
}


export default Provider;