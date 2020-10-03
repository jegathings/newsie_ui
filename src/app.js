import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.scss';



const App = (props) => {
    const baseURL = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=hxJymqaBJ3aNPRUChT9AlODBoYFOgAMx';    
    
    const getInfo = async() =>{
        const response = await fetch(`${baseURL}`);
        const result = await response.json();
        setBookmarks(result.results);
    }

    React.useEffect(() => {
        getInfo()
    },[]);

    return (
        <>
            <div className="main">
                <h1>Newsie</h1>
            </div>
        </>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
