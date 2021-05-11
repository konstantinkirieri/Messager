import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage, loadMessages } from './../actions/messageActions';
import MessageField from './../component/MessageField/MessageField'
 
const mapStateToProps = ({ messageReducer }) => ({
    messages: messageReducer.messages,
    isLoading: messageReducer.isLoading,
    isSending: messageReducer.isSending,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);

 