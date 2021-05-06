import React from 'react';
import PropTypes from 'prop-types';
import TextFild from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Message from './../../containers/Message'
import './style.css'

export default class MessageField extends React.Component {

    static propTypes = {
        chatId: PropTypes.string,
        chats: PropTypes.object.isRequired,
        messages: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.messageFieldRef = React.createRef();

        this.submitMessage = this.submitMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                value: event.target.value
            }
        )
    }
    
    submitMessage() {
        if(this.state.value == false) return;
            const arrOfObj = Object.entries(this.props.messages);
            let messageId = 0;
            if(arrOfObj.length){
                messageId = Number(arrOfObj[arrOfObj.length - 1][0]) + 1;
            } else {
                messageId = 1
            }

            this.props.sendMessage(this.state.value, 'me', this.props.chatId, messageId);
            

            this.setState({
                value: '',
            })
            
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.submitMessage();
        }
    }

    componentDidUpdate() {

        if(this.props.chatId) {this.messageFieldRef.current.scrollTop =
            this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;}
    }

    render() {
        const { messages, chatId, chats } = this.props;
        // const { messageList } = this.props.chats[chatId]

        const messageElements = chats[chatId]?.messageList.map((messageId) => {
            const { text, sender } = messages[messageId];
            
            return <Message
                messageId={messageId}
                chatId={chatId}
                key={messageId}
                text={text}
                sender={sender}/>}
        );

        return (
            <div className='MessageField'>
                <div ref={this.messageFieldRef} className='areaMessag'>
                    { messageElements }
                </div>
                <div className="messegFild">
                    <TextFild
                        fullWidth={true}
                        id='standard-basic'
                        label='Ваше сообщение'
                        variant='filled' 
                        value={this.state.value}
                        onChange={this.handleChange}
                        onKeyUp={this.handleKeyUp}
                    />
                    <Button 
                        variant="contained" 
                        disabled={this.state.value === ''}
                        onClick={this.submitMessage}
                    >
                        Отправить
                    </Button>
                </div>
            </div>
        )
    }
}

 