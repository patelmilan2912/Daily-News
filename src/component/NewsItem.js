import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
                      {source}
                    </span>
                    <img src={!imageUrl ? "https://www.ctvnews.ca/polopoly_fs/1.5703749.1639248986!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toLocaleDateString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Go to Article</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
