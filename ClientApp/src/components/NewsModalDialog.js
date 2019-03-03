import React, { Component } from 'react';
import {Modal} from "react-bootstrap";

export default class NewsModalDialog extends Component {
    render() {
        return (
            <Modal  show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{this.props.body}</p>
                </Modal.Body>
            </Modal>
        )
    }
}