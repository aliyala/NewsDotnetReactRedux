import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsItem from "./NewsItem";
import {bindActionCreators} from "redux";
import {actionCreators} from "../store/News";
import NewsModalDialog from "./NewsModalDialog";

class News extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            selectedNews: null
        }
    }

    getNewsItems(news) {
        return news.map(n => {
            return <NewsItem title={n.title} onSelect={() => {this.setState({selectedNews: n})}}/>
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
                <NewsModalDialog
                    show={this.state.selectedNews}
                    items={this.props.news}
                    selectedItem={this.state.selectedNews}
                    body={this.state.selectedNews ? this.state.selectedNews.content : ''}
                    title={this.state.selectedNews ? this.state.selectedNews.title : ''}
                    handleClose={() => {this.setState({selectedNews: null})}}
                />
            </div>
        )
    }
}

export default connect(state =>
    state.news,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(News);
