import React from 'react';

const Quote = () => {
    return (
        <div className='border flex justify-between px-4 mt-2 rounded'>
            <blockquote>
            <h6 className='text-xl'>Quote</h6>
            </blockquote>
            <span className='text-blue-500 block'><a href="#n">Quote Owner</a></span>
        </div>
    );
};

export default Quote;