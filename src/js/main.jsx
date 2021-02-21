import React from 'react';
import ReactDOM from 'react-dom';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            messages: ['hello']
        };

        this.submitMessage = this.submitMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
    
    submitMessage(event) {
        event.preventDefault();
        const newMessages = [...this.state.messages, this.state.value];
        this.setState({
            messages: newMessages,
            value: ''
        })
    }

    render() {

        return (
            <div>
                <div>
                    { this.state.messages.map((mes, i) => <p key={i}>{mes}</p>) }
                </div>
                <form onSubmit={this.submitMessage}>
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
 