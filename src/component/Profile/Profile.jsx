import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css'

export default class Profile extends React.Component {

    componentDidMount() {
        this.props.loadProfile();
    }

    render() {
        if(this.props.isLoading) {
            return (
                <div className='containerProfile'>
                    <CircularProgress />
                </div>
            )
        }

        return(
            <div className='containerProfile'>
                <p>{ this.props.profileInfo.userName }</p>
                <p>{ this.props.profileInfo.surname }</p>
                <p>{ this.props.profileInfo.age }</p>
            </div>
        )
    }
}