import { connect } from 'react-redux';
import Profile from './../component/Profile/Profile'

const mapStateToProps = ({ profileReducer }) => ({
    profileInfo: profileReducer.profileInfo
});

export default connect(mapStateToProps)(Profile);