import React from 'react';
import TextFild from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../style/style.css'

function Message(props) {
    return (
        <div className={'messag' + props.mes.author}>
            <h3>{props.mes.author}</h3>
            <p key={props.i}>{props.mes.text}</p>
        </div>
    )
}

export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            messages: [],
            robotToggle: false
        };

        this.messageFieldRef = React.createRef();

        this.submitMessage = this.submitMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
    
    submitMessage(event) {
        if(this.state.value == false) return;
        const newMessages = [...this.state.messages, {author: 'User', text: this.state.value}];
        this.setState({
            messages: newMessages,
            value: '',
            robotToggle: true
        })
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.submitMessage();
        }
    }

    componentDidUpdate() {
        if(this.state.robotToggle) {
            this.setState({
                robotToggle: false
            })
            setTimeout(() => {
                const robotMessages = [...this.state.messages, {author: 'Groot', text: 'I am Groot'}];
                return this.setState({
                    messages: robotMessages
                })
            }, 1000)
    }
        this.messageFieldRef.current.scrollTop =
            this.messageFieldRef.current.scrollHeight - this.messageFieldRef.current.clientHeight;
    }

    renderMessag = (mes, i) => <Message key={i} mes={mes}/>

    render() {

        return (
            <div className='Chat'>
                <div ref={this.messageFieldRef} className='areaMessag'>
                    { this.state.messages.map(this.renderMessag) }
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
 

 