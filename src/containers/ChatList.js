import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChat, deleteChat, activateChat, loadChats } from './../actions/chatActions';
import ChatList from './../component/ChatList/ChatList';
import { push } from 'connected-react-router';

const mapStateToProps = (store) => {
  return store.chatReducer
};

const mapDispatchToProps = dispatch => bindActionCreators({
  loadChats,
  addChat,
  deleteChat,
  activateChat,
  push
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);