import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeMessage } from './../actions/messageActions';
import Message from './../component/Message/Message'


const mapDispatchToProps = dispatch => bindActionCreators({ removeMessage }, dispatch);

export default connect(null, mapDispatchToProps)(Message);