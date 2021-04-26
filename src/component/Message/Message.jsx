import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Message extends React.Component {
    handleClickRemoveMessage = (event) => {
        const messageId = event.currentTarget.dataset.messageid;
        const chatId = event.currentTarget.dataset.chatid;

        this.props.removeMessage(messageId, chatId)
    }

    render () {
        return (
        <div className={'messag' + this.props.sender}>
            <h3>{this.props.sender}</h3>
            <p key={this.props.index}>{this.props.text}</p>
            <IconButton aria-label="delete" size="small"
                data-messageid={this.props.messageId}
                data-chatid={this.props.chatId}
                onClick={this.handleClickRemoveMessage}>
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </div>
        )
    }
}