import { connect } from 'react-redux';
import Header from './../component/Header/Header';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';


const mapStateToProps = ({ profileReducer, chatReducer }) => ({
    profileInfo: profileReducer.profileInfo,
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);