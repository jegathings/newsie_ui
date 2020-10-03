import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.scss';



const App = (props) => {
    const [articles, setArticles] = React.useState(null);
    const baseURL = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=hxJymqaBJ3aNPRUChT9AlODBoYFOgAMx';    
    
    const getInfo = async() =>{
        const response = await fetch(`${baseURL}`);
        const result = await response.json();
        console.log(result.results);
        setArticles(result.results);
    }

    React.useEffect(() => {
        getInfo()
    },[]);

    return (
        <>
            <div className="main">
                <h1>Newsie</h1>
                <div>
                    {
                    articles ? 
                    articles.map((article, index) => {
                        return(
                            <div key={index}>
                                <div className="main-list-item">
                                <div className="main-list-item-div main-list-item-div-one">
                                <a href={article.short_url} target="_blank"><button>{article.title}</button></a>
                                </div>
                                <div className="main-list-item-div main-list-item-div-two">
                                </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    "...Loading"                        
                    }
                </div>
            </div>
        </>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
