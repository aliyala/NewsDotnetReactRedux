import React, { Component } from 'react';
import {Modal, FormControl, Button} from "react-bootstrap";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class AddNewsModalDialog extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            title: '',
            content: '',
            createdDatetime: ''
        }

        this.onSave = this.onSave.bind(this)
        this.onContentChange = this.onContentChange.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)
    }

    onSave() {
        this.props.save(this.state)
    }

    onTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    onContentChange(event, editor) {
        const data = editor.getData();
        this.setState({
            content: data
        })
    }

    render() {
        return (
            <Modal  show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{'Добавление'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <FormControl onChange={this.onTitleChange}/>
                        <CKEditor
                            editor={ ClassicEditor }
                            data="<p>Hello from CKEditor 5!</p>"
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={this.onContentChange}
                            onBlur={ editor => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ editor => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                        <Button onClick={this.onSave}>Сохранить</Button>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}