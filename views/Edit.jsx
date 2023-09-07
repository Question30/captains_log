const React = require('react');
const DefaultLayout = require('./layout/Default')

function Edit({log}){
    return(
        <DefaultLayout title={log.title}>
            <form className='flex flex-col my-3 border-2 border-[#213555] bg-[#4F709C] text-[#E5D283] container-lg w-3/4 p-3' action={`/api/logs/${log._id}?_method=PUT`} method='POST'>
            Title: <input type='text' className='text-[#213555] my-2' name='title' defaultValue={log.title} required/>
                Entry:<textarea required name='entry' type='text' className='text-[#213555] my-2' defaultValue={log.entry}></textarea>
                <label  className='my-2' htmlFor='shipIsBroken'>
                Is the Ship Broken? 
                <input className='mx-3' type='checkbox' name='shipIsBroken' defaultChecked={log.shipIsBroken} />
                </label>
                <input className='rounded border-2 my-2 w-1/4 mx-auto bg-[#F0F0F0] text-[#213555] border-[#213555]' type='submit' value='Edit' />
            </form>
        </DefaultLayout>
    )
}

module.exports = Edit;