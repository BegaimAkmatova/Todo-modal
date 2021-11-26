import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverLay from './ModalOverLay';

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal (
                <Backdrop onConfirm = {props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal (
                <ModalOverLay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
                document.getElementById('modal-root')
            )}
       </React.Fragment>
    )
}
export default ErrorModal;