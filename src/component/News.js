import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?${props.country}&language=en&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()    
        console.log(parsedData)
        props.setProgress(50);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        //eslint-disable-next-line
    }, [])
 
    const handlePreviousChange = async () => {
       setPage(page-1)
        updateNews();
    }

   const handleNextChange = async () => {
    setPage(page+1)
    updateNews();
    }

        return (
            <div className='container my-4'>
                <h2 className='text-center'>Daily-News Top Headlines from {capitalizeFirstLetter(props.category)} Category</h2>
                {loading && <Spinner />}
                <div className='row'>
                    {articles.map((element) => {
                        return <div className='col md-3' key={element.url} >
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePreviousChange}> &larr; Previous</button>
                    <button disabled={(page + 1 > Math.ceil(totalResults / props.pageSize))} type="button" className="btn btn-dark" onClick={handleNextChange}>Next &rarr; </button>

                </div>
            </div>
        )
 
}

News.defaultProps = {
    country: 'ca',
    pageSize: 8,
    category: 'science'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News
