import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'

export default class ChatList extends React.Component {
  static propTypes = {
    chatId: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className='ChatList'>
        <List>
          {this.props.chats.map(({ id, text }) => (
            <Link to={`/chat/${id}`} key={id}>
              <ListItem button selected={id === this.props.chatId}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Button variant="contained" onClick={this.props.addChat}>Добавить чат</Button>
      </div>
    )
  }
}
