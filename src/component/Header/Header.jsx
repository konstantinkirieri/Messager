import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.string,
        push: PropTypes.func.isRequired,
    };

    handleNavigate = (link) => {
        this.props.push(link);
    };

    render() {
        return (
            <div className='header'>
                    <div 
                    className='hederLink'
                    onClick={ () => this.handleNavigate('/profile/') }>
                        Профиль: { this.props.profileInfo.userName }
                    </div>
                    <div className='hederLink'
                    onClick={ () => this.handleNavigate('/') }>
                        Мои чаты
                    </div>
                <div className='nameChat'>Чат {this.props.chatId || 'не выбран'}</div>
            </div>
        )
    }
}