const React = require('react');

function Edit({log}){
    return(
        <main>
            <form action={`/api/logs/${log._id}?_method=PUT`}>
            Title: <input type='text' name='title' defaultValue={log.title} required/>
                Entry:<textarea required name='entry' defaultValue={log.entry}></textarea>
                Is the Ship Broken? 
                <input type='checkbox' name='shipIsBroken' defaultChecked={log.shipIsBroken} />
                <input type='submit' value='Edit' />
            </form>
        </main>
    )
}

module.exports = Edit;