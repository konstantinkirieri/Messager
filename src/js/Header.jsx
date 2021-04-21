import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    render() {
        return (
            <div className='header'>
                <Link to={'/profile/'}>
                    <div className='hederLink'>Профиль</div>
                </Link>
                <Link to={'/'}>
                    <div className='hederLink'>Мои чаты</div>
                </Link>
                Чат {this.props.chatId || 'не выбран'}
            </div>
        )
    }
}