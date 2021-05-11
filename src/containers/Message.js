import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeMessage } from './../actions/messageActions';
import Message from './../component/Message/Message'

const mapStateToProps = ({ messageReducer }) => ({
    isRemoving: messageReducer.isRemoving,
});

const mapDispatchToProps = dispatch => bindActionCreators({ removeMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Message);