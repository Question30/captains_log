const React = require('react');

function New(){
    return(
        <main>
            <form action='/logs' method='POST'>
                Title: <input type='text' name='title' required/>
                Entry:<textarea required name='entry'></textarea>
                Is the Ship Broken? 
                <input type='checkbox' name='shipIsBroken' />
                <input type='submit' value='Add' />
            </form>
        </main>
    )    
}

module.exports = New;