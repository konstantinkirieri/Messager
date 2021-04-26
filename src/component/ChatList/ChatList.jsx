import React from 'react';
import PropTypes from 'prop-types';
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
    addChat: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
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

  handleRemoveChatClick = (event) => {
    const chatId = event.currentTarget.dataset.id;
    this.props.removeChat(chatId);
  }

  handleNavigate = (link) => {
    this.props.push(link);
  };

  render () {

    return (
      <div className='ChatList'>
        <List>
          {Object.entries(this.props.chats).map(([ id, value ]) => (
            <div key={id}>
              <ListItem button
              className={ value.chatActive === true ? 'active' : '' }
              selected={id === this.props.chatId}
              onClick={ () => this.handleNavigate(`/chat/${id}`) }>
              <ListItemText primary={value.title} />
            </ListItem>
              <Button variant="contained" color="secondary"
              data-id={id}
              onClick={this.handleRemoveChatClick}>
              Удалить
              </Button>
            </div>
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