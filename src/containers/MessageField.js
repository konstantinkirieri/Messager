import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from './../actions/messageActions';
import MessageField from './../component/MessageField/MessageField'
 
const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    messages: messageReducer.messages,
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);

 