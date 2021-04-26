import React from 'react';
import PropTypes from 'prop-types';
import TextFild from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css'

function Message(props) {
    return (
        <div className={'messag' + props.sender}>
            <h3>{props.sender}</h3>
            <p key={props.index}>{props.text}</p>
        </div>
    )
}

export default class MessageField extends React.Component {

    static propTypes = {
        chatId: PropTypes.string
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

            this.props.sendMessage(this.state.value, 'me', this.props.chatId);
            setTimeout(() => {
                this.props.sendMessage('Я робот!', 'bot', this.props.chatId);
            }, 1000)
            

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

    renderMessage = (mes, i) => <Message key={i} mes={mes}/>

    render() {
        const { messages, chatId } = this.props;
        const { messageList } = this.props.chats[chatId]

        const messageElements = Object.entries(messages).map(([ index, value ]) => (
            (messageList.includes(Number(index))) && <Message
                key={index}
                text={value.text}
                sender={value.sender}/>)
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

 