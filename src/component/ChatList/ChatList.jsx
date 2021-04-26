import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './style.css'

export default class ChatList extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
    chats: PropTypes.object.isRequired,
    addChat: PropTypes.func.isRequired
  };

  state = {
    chatName: ''
  }

  handleChangeChatName = (event) => {
    this.setState(
        {
          chatName: event.target.value
        }
    )
  }

  handleAddChatClick = () => {
    this.props.addChat(this.state.chatName);

    this.setState({
      chatName: ''
    });
  }

  render () {

    return (
      <div className='ChatList'>
        <List>
          {Object.entries(this.props.chats).map(([ id, value ]) => (
            <Link to={`/chat/${id}`} key={id}>
              <ListItem button selected={id === this.props.chatId}>
                <ListItemText primary={value.title} />
              </ListItem>
            </Link>
          ))}
        </List>
        <TextField id="filled-basic" label="Filled" variant="filled"
          value={this.state.chatName} 
          onChange={this.handleChangeChatName}/>
        <Button variant="contained" 
        onClick={this.handleAddChatClick}>
          Добавить чат
        </Button>
      </div>
    )
  }
}