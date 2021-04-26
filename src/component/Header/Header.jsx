import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css'

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    render() {
        return (
            <div className='header'>
                <Link to={'/profile/'}>
                    <div className='hederLink'>Профиль: { this.props.profileInfo.userName }</div>
                </Link>
                <Link to={'/'}>
                    <div className='hederLink'>Мои чаты</div>
                </Link>
                <div className='nameChat'>Чат {this.props.chatId || 'не выбран'}</div>
            </div>
        )
    }
}