import React, { useState } from 'react';

const CreateQuote = () => {
    const [quote, setQuote] = useState('')
    const handleOnSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='md:w-4/12 w-10/12 mx-auto'>
            <h4 className='text-2xl'>Add Your Quote</h4>
            <form onSubmit={handleOnSubmit}  className='flex flex-col'>
                <input placeholder='Add Your Quote' type="text" name="quote" id="" value={quote} onChange={(e) => e.target.value} className="border border-gray-800 py-1 px-3 text-xl focus:outline-none rounded my-4" />
                <button type="submit" className="py-3 px-4 bg-slate-900 inline-block w-4/12 text-center text-xl text-slate-50 rounded">Submit</button>
            </form>
        </div>
    );
};

export default CreateQuote;