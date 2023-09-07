const React = require('react');
const DefaultLayout = require('./layout/Default')

function Index({logs}){
    return(
        <DefaultLayout title='All Logs'>
            <a className='border-2 border-[#213555] bg-[#4F709C] text-[#E5D283] px-4 py-2' href='/logs/new'>Add New Log</a>
            <div>
            <ul>
                {
                    logs.map(log => {
                        let dateCreated = log.createdAt;
                        let date = dateCreated.toString().slice(0,15);
                        return(
                            <li key={log._id} className='border-2 border-[#213555] my-2 bg-[#4F709C] text-[#E5D283] w-96 pl-4 py-2'>
                                <div className='text-right pr-2'>{date}</div>
                               <a className='underline font-bold' href={`/logs/${log._id}`}>{log.title}</a> 
                               <p>{log.entry}</p>
                               <form method='POST' action={`/api/logs/${log._id}?_method=DELETE`}>
                                <input className='rounded border-2 my-2 w-1/4 mx-auto bg-[#F0F0F0] text-[#213555] border-[#213555]' type='submit' value='Delete'/>
                               </form>
                            </li>
                        )
                    })
                }
            </ul>
            </div>
        </DefaultLayout>
    )
}

module.exports = Index;