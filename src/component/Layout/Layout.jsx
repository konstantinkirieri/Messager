import React from 'react';
import PropTypes from 'prop-types';
import ChatList from './../../containers/ChatList';
import MessageField from './../../containers/MessageField';
import Header from './../../containers/Header';
import './style.css'

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    render () {
        const { chatId, children, title } = this.props;

        return (
            <div className='container'>
                <Header title={title}/>
                <div className='content'>
                    <ChatList chatId={chatId}/>
                    { children }
                </div>
            </div>
        )
    }
}