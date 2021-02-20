import React from 'react';
import ReactDOM from 'react-dom';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            messeges: []
        };

        this.submitMessage = this.submitMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
    
    submitMessage(event) {
        event.preventDefault();
        this.setState({
            messege: this.state.messeges.push(this.state.value),
            value: ''
        })
    }

    render() {
        const messegesForRender = this.state.messeges.map((messege, i) =>
            <p key={i}>{messege}</p>
        );

        return (
            <div>
                <div>
                    {messegesForRender}
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
 