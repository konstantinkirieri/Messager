import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChat, removeChat, activateChat, loadChats } from './../actions/chatActions';
import ChatList from './../component/ChatList/ChatList';
import { push } from 'connected-react-router';

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
  isLoading: chatReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadChats,
  addChat,
  removeChat,
  activateChat,
  push
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);