import React from 'react';
import PropTypes from 'prop-types';
import ChatList from './ChatList.jsx';
import MessageField from './MessageField.jsx';
import Header from './Header.jsx'

export default class App extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    state = {
        countChat: 3,

        messages: {
            '1': [
                {
                    author: 'Groot',
                    text: 'I am Groot chat 1'
                },
            ],
            '2': [
                {
                    author: 'Groot',
                    text: 'I am Groot chat 2'
                },
            ],
            '3': [
                {
                    author: 'Groot',
                    text: 'I am Groot chat 3'
                },
            ],
        },

        chats: [
            {
              id: '1',
              text: 'chat 1'
            },
            {
              id: '2',
              text: 'chat 2'
            },
            {
              id: '3',
              text: 'chat 3'
            },
          ]
    }

    submitMessage = () => {
        const { chatId } = this.props;

        const newMessages = {
            ...this.state.messages,
            [chatId]: [
                ...this.state.messages[chatId],
                {
                    author: 'User',
                    text: this.state.value
                }
            ]
        };
        this.setState({
            messages: newMessages,
        })
    }

    submitMessageGrut = () => {
        const { chatId } = this.props;
        setTimeout(() => {
            const robotMessages = {
                ...this.state.messages,
                [chatId]: [
                    ...this.state.messages[chatId],
                    {
                        author: 'Groot',
                        text: `I am Groot chat ${chatId}`
                    }
                ]
            };
            this.setState({
                messages: robotMessages
            })
        }, 1000)
    }

    addChat = () => {
        console.log('add chat')

        let newChatCount = this.state.countChat + 1;

        this.setState({
            messages: {
                ...this.state.messages,
                [newChatCount]: [
                    {
                        author: 'Groot',
                        text: 'Вы создали новый чат'
                    },
                ]
            },

            chats: [
                ...this.state.chats,
                {
                    id: newChatCount,
                    text: `chat ${newChatCount}`
                }
            ],

            countChat: newChatCount
        })
    }

    render () {

        const { chatId } = this.props;

        return (
            <div className='container'>
                <Header chatId={chatId}/>
                <div className='content'>
                    <ChatList chatId={chatId} chats={this.state.chats} addChat={this.addChat}/>
                    <MessageField
                        chatId={chatId}
                        messages={this.state.messages}
                        submitMessage={this.submitMessage}
                        submitMessageGrut={this.submitMessageGrut}
                    />
                </div>
            </div>
        )
    }
}