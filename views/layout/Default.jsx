const React = require('react');

function DefaultLayout({title, children}) {
    return(
        <html>
            <head>
                <title>{title}</title>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body className='bg-[#F0F0F0] flex flex-col items-center'>
            <nav className='bg-[#4F709C] text-[#E5D283] w-screen h-8'>
                    <a className='pl-4 text-lg' href='/logs'>All Logs</a>
                </nav>
                <h1 className='text-4xl my-3 font-bold'>{title}</h1>
                {children}
            </body>
        </html>
    )
}

module.exports = DefaultLayout;