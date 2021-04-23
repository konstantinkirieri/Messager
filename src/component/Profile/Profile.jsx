import React from 'react';
import Header from './../../containers/Header';
import './style.css'

export default class Profile extends React.Component {
    render() {
        return(
            <>
                <Header/>
                <div className='containerProfile'>
                    <p>{ this.props.profileInfo.userName }</p>
                    <p>{ this.props.profileInfo.surname }</p>
                    <p>{ this.props.profileInfo.age }</p>
                </div>
            </>
        )
    }
}