const React = require('react');

function Show({log}){
    return(
        <main>
            <h1>{log.title}</h1>
            <p>{log.entry}</p>
            <div>{log.shipIsBroken ? 'Ship is Broken' : 'Ship is fine'}</div>
        </main>
    )
}

module.exports = Show;