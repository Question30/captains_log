const React = require('react');
const DefaultLayout = require('./layout/Default');
const logs = require('../models/logs');

function Show({log}){
    return(
        <DefaultLayout title={log.title}>
            <main className='container'>
                <section className='flex flex-col my-3 border-2 border-[#213555] bg-[#4F709C] text-[#E5D283] w-3/4 mx-auto p-3 text-center text-xl'>
            <h1>Title: {log.title}</h1>
            <p> Entry: {log.entry}</p>
            <div>{log.shipIsBroken ? 'The ship is Broken' : 'The ship is fine'}</div>
            <a className='rounded border-2 my-2 w-1/4 mx-auto bg-[#F0F0F0] text-[#213555] border-[#213555]' type='submit' href={`/logs/${log._id}/edit`}>Edit log</a>
                </section>
                <section className='flex flex-col my-3 border-2 border-[#213555] bg-[#4F709C] text-[#E5D283] w-3/4 mx-auto p-3 text-center text-xl'>
                    <form method="POST" action={`/api/logs/add-comments/${log._id}?_method=PUT`} className='flex flex-col'>
                        Author: <input className='text-[#213555] my-2' type='text' name='author' required/>
                        Comment: <textarea className='text-[#213555] my-2' name='body'></textarea>
                        <input className='rounded border-2 my-2 w-1/4 mx-auto bg-[#F0F0F0] text-[#213555] border-[#213555]' type='Submit' defaultValue='Comment' />
                    </form>
                </section>
                {
                    log.comments ? log.comments.map(comment =>{
                        return(
                            <section key={comment._id} className='flex flex-col my-3 border-2 border-[#213555] bg-[#4F709C] text-[#E5D283] w-3/4 mx-auto p-3 text-center text-xl'>
                                <h1>{comment.author}</h1>
                                <p>{comment.body}</p>
                            </section>
                        )
                    }) : ''
                }
            </main>
        </DefaultLayout>
    )
}

module.exports = Show;