import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css'

function Message(props) {
    return (
        <div className={'messag' + props.mes.author}>
            <h3>{props.mes.author}</h3>
            <p key={props.i}>{props.mes.text}</p>
        </div>
    )
}

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            messages: [],
            robotToggle: false
        };

        this.submitMessage = this.submitMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
    
    submitMessage(event) {
        event.preventDefault();
        if(this.state.value == false) return;
        const newMessages = [...this.state.messages, {author: 'user', text: this.state.value}];
        this.setState({
            messages: newMessages,
            value: '',
            robotToggle: true
        })
    }

    componentDidUpdate() {
        if(!this.state.robotToggle) return;
        setTimeout(() => {
            const robotMessages = [...this.state.messages, {author: 'Groot', text: 'I am Groot'}];
            return this.setState({
                messages: robotMessages,
                robotToggle: false
            })
        }, 2000)
    }

    renderMessag = (mes, i) => <Message key={i} mes={mes}/>

    render() {

        return (
            <div className='Chat'>
                <div className='areaMessag'>
                    { this.state.messages.map(this.renderMessag) }
                </div>
                <form onSubmit={this.submitMessage} className='inputForMessag'>
                    <textarea value={this.state.value} onChange={this.handleChange} />
                    <input type='submit' value='Отправить'/>
                </form>
            </div>
        )
    }
}
 
 ReactDOM.render(
    <Chat />,
    document.getElementById('app'),
 );
 