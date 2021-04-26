import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeMessage } from './../actions/removeMessageActions';
import Message from './../component/Message/Message'

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    messages: messageReducer.messages,
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ removeMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Message);