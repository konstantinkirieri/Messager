import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadProfile } from './../actions/profileActions';

import Profile from './../component/Profile/Profile'

const mapStateToProps = ({ profileReducer }) => ({
    profileInfo: profileReducer.profileInfo,
    isLoading: profileReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadProfile,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);