import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.scss';



const App = (props) => {
    const [articles, setArticles] = React.useState(null);
    const [count, setCount] = React.useState(null);
    const [savedArticles, setSavedArticles] = React.useState(new Set(), null);
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
    const handleSave = (article) =>{
        savedArticles.add(article.url);
        setSavedArticles(savedArticles)
        setCount(savedArticles.size);
    }
    const handlePersist = () =>{
        console.log("To Database");
        console.log(savedArticles);
    }
    return (
        <>
            <div className="main">
                <div className="title">
                    <h1>Newsie</h1>
                    <div className="cart">
                        <h1>{count}</h1>
                        <button onClick={() =>{
                                        handlePersist();
                                    }}>save</button>
                    </div>
                </div>
                <div>
                    {
                    articles ? 
                    articles.map((article, index) => {
                        return(
                            <div key={index}>
                                <div className="main-list-item">
                                <div className="main-list-item-div main-list-item-div-one">
                                <button onClick={() =>{
                                        handleSave(article);
                                    }}>{article.title}</button>
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
