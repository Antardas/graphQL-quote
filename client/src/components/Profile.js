import React from 'react';
import Quotes from './Quotes/Quotes';

const Profile = () => {
    return (
        <div>
            <div className='w-40 '>
                <img className='w-full rounded-full' src="https://i.pravatar.cc/300" alt="user" />
            </div>
            <h3>User Name</h3>
            <div>
                <h3>Quote List</h3>
                <Quotes/>
            </div>

        </div>
    );
};

export default Profile;