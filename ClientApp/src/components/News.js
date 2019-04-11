import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsItem from "./NewsItem";
import {bindActionCreators} from "redux";
import {actionCreators} from "../store/News";
import NewsModalDialog from "./NewsModalDialog";
import { Button, ButtonToolbar } from "react-bootstrap";
import AddNewsModalDialog from './AddNewsModalDialog';
import './News.css'

class News extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            selectedNews: null,
            addingNews: false
        }

        this.saveNews = this.saveNews.bind(this)
    }

    getNewsItems(news) {
        return news.map(n => {
            return <NewsItem title={n.title} onSelect={() => {this.setState({selectedNews: n})}}/>
        })
    }

    async saveNews(news) {
        await this.props.addNews(news)
        this.setState({addingNews: false})
    }

    async componentDidMount() {
        await this.props.getNews()
    }

    render() {
        return (
            <div>
                <h1>Новости</h1>
                <ButtonToolbar>
                    <Button className='action-btn' variant="outline-primary" onClick={() => {this.setState({addingNews: true})}}>Добавить новость</Button>
                </ButtonToolbar>
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
                    save={this.saveNews}
                />
            </div>
        )
    }
}

export default connect(state =>
    state.news,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(News);
