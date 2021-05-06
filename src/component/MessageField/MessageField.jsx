import React from 'react';
import PropTypes from 'prop-types';
import TextFild from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Message from './../../containers/Message'
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css'

export default class MessageField extends React.Component {

    static propTypes = {
        isSending: PropTypes.bool,
        isLoading: PropTypes.bool,
        chatId: PropTypes.string,
        messages: PropTypes.object.isRequired,
        loadMessages: PropTypes.func,
        sendMessage: PropTypes.func,
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

    componentDidMount() {
        const { chatId, loadMessages } = this.props;

        loadMessages(chatId);
    }

    componentDidUpdate(prevProps) {
        const { chatId, loadMessages } = this.props;
        if(prevProps.chatId !== chatId ) {
            loadMessages(chatId);
        }

        if(this.props.chatId) {this.messageFieldRef.current.scrollTop =
            this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;}
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

            this.props.sendMessage({
                id: messageId,
                text: this.state.value,
                sender: 'me',
                chatId: Number(this.props.chatId)
            });
            

            this.setState({
                value: '',
            })
            
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.submitMessage();
        }
    }

    render() {
        const { messages, chatId } = this.props;

        const messageElements = Object.entries(messages).map(([messageId, message]) => {
            const { text, sender } = message;
            
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
                    { this.props.isLoading ? <CircularProgress /> : messageElements }
                    { this.props.isSending && <CircularProgress /> }
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

 