const React = require('react');

function Index({logs}){
    return(
        <main>
            <h1>All Logs</h1>
            <a href='/logs/new'>Add New Log</a>
            <ul>
                {
                    logs.map(log => {
                        return(
                            <li key={log._id}>
                                {log.title}
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}

module.exports = Index;