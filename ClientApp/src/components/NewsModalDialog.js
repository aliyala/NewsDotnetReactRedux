import React, { Component } from 'react';
import {Modal} from "react-bootstrap";

export default class NewsModalDialog extends Component {
    render() {
        return (
            <Modal  show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        {this.props.body}
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}