import React from 'react'
import { connect } from 'react-redux'
import { alertActions } from '../../_actions';

import './AlertMessage.scss';

export const AlertMessage = ({ alert: { type, message } , clearAlerts, history }) => {
    let handleClick = () => {
        clearAlerts();
    }

    return (
        <div className={ `alert ${type} d-flex align-items-center fadeIn` }>
            <span>{ message }</span>
            <button className="btn ml-auto" onClick={() => handleClick()}>✖</button>
        </div>
    )
}

const mapStateToProps = ({ alert, history }) => ({ alert, history })

const mapDispatchToProps = {
    clearAlerts: alertActions.clear
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertMessage)

