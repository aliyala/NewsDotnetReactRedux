import React, { Component } from 'react';
import {Modal, FormControl} from "react-bootstrap";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class AddNewsModalDialog extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Modal  show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{'Добавление'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <FormControl/>
                        <CKEditor
                            editor={ ClassicEditor }
                            data="<p>Hello from CKEditor 5!</p>"
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ editor => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ editor => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}