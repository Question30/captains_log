const React = require('react');
const DefaultLayout = require('./layout/Default')

function New(){
    return(
        <DefaultLayout title='Add Log'>
            <form className='flex flex-col my-3 border-2 border-[#213555] bg-[#4F709C] text-[#E5D283] container-lg w-3/4 p-3' action='/logs' method='POST'>
                Title: <input className='text-[#213555] my-2' type='text' name='title' required/>
                Entry:<textarea className='text-[#213555] my-2' required name='entry'></textarea>
                <label className='my-2' htmlFor='shipIsBroken'>Is the Ship Broken?
                <input className='mx-3' type='checkbox' name='shipIsBroken' />
                 </label>
                <input className='rounded border-2 my-2 w-1/4 mx-auto bg-[#F0F0F0] text-[#213555] border-[#213555]' type='submit' value='Add' />
            </form>
        </DefaultLayout>
    )    
}

module.exports = New;