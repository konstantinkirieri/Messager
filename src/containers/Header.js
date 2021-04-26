import { connect } from 'react-redux';
import Header from './../component/Header/Header'


const mapStateToProps = ({ profileReducer }) => ({
    profileInfo: profileReducer.profileInfo
});

export default connect(mapStateToProps)(Header);