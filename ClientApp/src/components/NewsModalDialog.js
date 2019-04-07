import React, { Component } from 'react';
import {Modal} from "react-bootstrap";
import Carousel from "react-bootstrap/es/Carousel";
import './NewsModalDialog.css'

export default class NewsModalDialog extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            selectedTitle: props.items.length > 0 ? props.items[0].title : '',
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            selectedTitle: this.props.items[selectedIndex].title,
            index: selectedIndex,
            direction: e.direction,
        });
    }

    getItems(items) {
        return items.map(i => {
            return <Carousel.Item>
                {i.content}
            </Carousel.Item>
        })
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Modal  show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.selectedTitle}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <Carousel
                            activeIndex={index}
                            direction={direction}
                            onSelect={this.handleSelect}
                        >
                            {this.getItems(this.props.items)}
                        </Carousel>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}