import React from 'react'
import './css/popUpMenu.css'

export const PopUp = ({ show, closeModalHandler }) => {
    return (
        <div className="modal-body" style={{
            opacity: show ? '1' : '0'
            }}>
            <div className="modal-header">
                <p>Confirmação</p>
                <span className="close-button">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-main">
                    <p>Caso confirmado o arquivo não podera ser recuperado!</p>
                </div>
                <div className="modal-footer">
                    <button className="button-cancel">close</button>
                </div>
            </div>
        </div>
    )
}

export default { PopUp }