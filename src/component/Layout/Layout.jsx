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

    static defaultProps = {
        chatId: '1'
    };

    render () {
        const { chatId } = this.props;

        return (
            <div className='container'>
                <Header chatId={chatId}/>
                <div className='content'>
                    <ChatList chatId={chatId}/>
                    <MessageField chatId={chatId}/>
                </div>
            </div>
        )
    }
}