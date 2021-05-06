import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Message extends React.Component {
    static propTypes = {
        isRemoving: PropTypes.bool,
        chatId: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
        messageId: PropTypes.string.isRequired,
        removeMessage: PropTypes.func.isRequired,
    };

    handleClickRemoveMessage = () => {
        const { removeMessage, messageId } = this.props;

        removeMessage(messageId)
    }

    render () {
        return (
        <div className={'messag' + this.props.sender}>
            <h3>{this.props.sender}</h3>
            <p key={this.props.index}>{this.props.text}</p>
            <IconButton aria-label="delete" size="small"
                onClick={this.handleClickRemoveMessage}>
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </div>
        )
    }
}