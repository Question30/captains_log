const React = require('react');

function New(){
    return(
        <main>
            <form action='/logs' method='POST'>
                Title: <input type='text' required/>
                Entry:<textarea required></textarea>
                Is the Ship Broken? 
                <input type='checkbox' />
                <input type='submit' />
            </form>
        </main>
    )    
}

module.exports = New;