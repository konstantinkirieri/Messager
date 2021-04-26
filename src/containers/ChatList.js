import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChat } from './../actions/chatActions';
import { removeChat } from './../actions/removeChatActions';
import ChatList from './../component/ChatList/ChatList';
import { push } from 'connected-react-router';

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, removeChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);