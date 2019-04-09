import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsItem from "./NewsItem";
import {bindActionCreators} from "redux";
import {actionCreators} from "../store/News";
import NewsModalDialog from "./NewsModalDialog";
import Button from "react-bootstrap/es/Button";
import AddNewsModalDialog from './AddNewsModalDialog';

class News extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            selectedNews: null,
            addingNews: true
        }

        this.addNews = this.addNews.bind(this)
    }

    getNewsItems(news) {
        return news.map(n => {
            return <NewsItem title={n.title} onSelect={() => {this.setState({selectedNews: n})}}/>
        })
    }

    addNews() {
        const news = {
            title: `Новая новость ${new Date()}`,
            content: 'контент'
        }
        this.props.addNews(news)
    }

    async componentDidMount() {
        await this.props.getNews()
    }

    render() {
        return (
            <div>
                <h1>Новости</h1>
                <Button onClick={this.addNews}>Добавить новость</Button>
                {this.getNewsItems(this.props.news)}
                <NewsModalDialog
                    show={this.state.selectedNews}
                    items={this.props.news}
                    selectedItem={this.state.selectedNews}
                    body={this.state.selectedNews ? this.state.selectedNews.content : ''}
                    title={this.state.selectedNews ? this.state.selectedNews.title : ''}
                    handleClose={() => {this.setState({selectedNews: null})}}
                />
                <AddNewsModalDialog
                    show={this.state.addingNews}
                    handleClose={() => {this.setState({addingNews: false})}}
                />
            </div>
        )
    }
}

export default connect(state =>
    state.news,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(News);
