import React, {useContext} from 'react';
import UserContext from '../context/UserContext';


function Profile() {
    const {user} = useContext(UserContext);

    //conditional return
    if(!user) return <div className='text-slate-300 font-bold'>Please Login</div>

    return <div className='w-[25%] text-center m-5 font-bold text-slate-300 rounded-2xl text-xl '>Welcome {user.username}</div>
}

export default Profile