import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.element = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.element);
        this.props.profileNameInputRef.current.focus();
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.element);
        this.props.imageLinkFormInputRef.current.focus();
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.element);
    }
}

export default Modal;