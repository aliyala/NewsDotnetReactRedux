import React from 'react';
import './NewsItem.css'

function NewsItem(props) {
        return (
            <div className={`news-item ${props.classname}`} onClick={props.onSelect}>
                <p>{props.title}</p>
            </div>
        );
}

export default NewsItem
