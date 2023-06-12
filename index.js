function App() {
    const [quotes,setQuotes] = React.useState([]);
    const [randomQuote,setRandomQuote] = React.useState([]);
    const [color,setColor] = React.useState("#16a085");
    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();
            setQuotes(data);
            let randomIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randomIndex]);
        }
        fetchData();
    },[])

    const getNewQuote = () =>{
        const colors = ["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"];
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomColorIndex = Math.floor(Math.random() * colors.length);
            setRandomQuote(quotes[randomIndex]);
            setColor(colors[randomColorIndex]);
    }

    return ( <div  style={{backgroundColor : color, minHeight : "120vh"}}>
        <div className="container pt-6">
        <div className="jumbotron">
            <div className="card">
                <div className="card-header">Motivational Quotes</div>
                <div className="card-body"></div>
                {randomQuote ? (
                    <>
                    <h5 className="card-title">-{randomQuote.author || "Unknown Author"}</h5>
                    <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                    </>
                ) : (
                    <h2>Please wait! Loading</h2>
                )}
                <div className="row">
                    <button onClick={getNewQuote} className="btn btn-primary ml-5">Change</button>
                    <a href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22I%20have%20been%20impressed%20with%20the%20urgency%20of%20doing.%20Knowing%20is%20not%20enough%3B%20we%20must%20apply.%20Being%20willing%20is%20not%20enough%3B%20we%20must%20do.%22%20Leonardo%20da%20Vinci" target="_blank" className="btn btn-warning">
                    <i className = "fa fa-twitter">Twitter</i>
                    </a>
                    <a href = "" className="btn btn-danger">
                    <i className = "fa fa-tumblr">Tumblr</i>
                        </a>
                </div>
            </div>
        </div>
</div>
</div>
    );
}

ReactDOM.render( <App/> , document.getElementById('app'));