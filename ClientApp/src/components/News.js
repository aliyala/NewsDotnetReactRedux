import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsItem from "./NewsItem";
import {bindActionCreators} from "redux";
import {actionCreators} from "../store/News";
import NewsModalDialog from "./NewsModalDialog";

class News extends Component {
    getNewsItems(news) {
        return news.map(n => {
            return <NewsItem title={n.title} onSelect={() => {alert('yyy')}}/>
        })
    }

    async componentDidMount() {
        await this.props.getNews()
    }

    render() {
        return (
            <div>
                <h1>Новости</h1>
                {this.getNewsItems(this.props.news)}
                <NewsModalDialog show={true} body={'fjfjfj'} />
            </div>
        );
    }
}

export default connect(state =>
    state.news,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(News);
