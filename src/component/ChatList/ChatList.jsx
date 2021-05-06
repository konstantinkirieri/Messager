import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import './style.css'

export default class ChatList extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    isAdding: PropTypes.bool,
    chatId: PropTypes.string,
    chats: PropTypes.objectOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      activateChat: PropTypes.bool,
      isDeleting: PropTypes.bool,
    })).isRequired,
    addChat: PropTypes.func.isRequired,
    activateChat: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    loadChats: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  };

  state = {
    chatName: ''
  }

  componentDidMount() {
    this.props.loadChats();
  }

  componentDidUpdate(prevProps) {
  const { chatId, activateChat } = this.props;

    if(prevProps.chatId !== chatId && chatId !== undefined) activateChat(false, chatId)
  }

  handleChangeChatName = (event) => {
    this.setState(
        {
          chatName: event.target.value
        }
    )
  }

  handleAddChatClick = () => {
    const { chats, addChat } = this.props;

    const id = Number(Object.keys(chats).pop()) + 1;

    addChat({
      id: id || 1,
      title: this.state.chatName
    });

    this.setState({
      chatName: ''
    });
  }

  handleRemoveChatClick = (event) => {
    event.stopPropagation();

    const chatId = event.currentTarget.dataset.id;
    this.props.deleteChat(chatId);
  }

  handleNavigate = (link) => {
    this.props.push(link);
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
        this.handleAddChatClick();
    }
}

  render () {
    const { chatName } = this.state;
    const { isLoading, isAdding } = this.props;

    if(isLoading) {
      return (
        <div className='ChatList'>
          <div className='CircularProgress'>
            <CircularProgress />
          </div>
        </div>
      )
    }

    return (
      <div className='ChatList'>
        <List>
          {Object.entries(this.props.chats).map(([ id, value ]) => (
            <div key={id} className='chatItem'>
              <ListItem button
              className={ value.chatActive === true ? 'active' : '' }
              selected={id === this.props.chatId}
              onClick={ () => this.handleNavigate(`/chat/${id}`) }>
              <ListItemText primary={value.title} />
              {value.isDeleting ? < CircularProgress /> : <IconButton aria-label="delete" size="small" className='delete-button'
              data-id={id}
              onClick={this.handleRemoveChatClick}>
              <DeleteIcon/>
              </IconButton>}
            </ListItem>
            </div>
          ))}
          { isAdding && <CircularProgress/> }
        </List>
        <form action="#" className='addChat' onSubmit={(e) => e.preventDefault()}>
          <TextField id="standard-basic" label="Добавить чат" 
          value={chatName} 
          onChange={this.handleChangeChatName}
          onKeyUp={this.handleKeyUp}/>
          <Fab size="small" color="secondary" aria-label="add"
          disabled={chatName === ''} onClick={this.handleAddChatClick}>
            <AddIcon/>
          </Fab>
        </form>
      </div>
    )
  }
}