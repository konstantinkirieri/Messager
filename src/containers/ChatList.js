import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addChat } from './../actions/chatActions';
import ChatList from './../component/ChatList/ChatList'

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);