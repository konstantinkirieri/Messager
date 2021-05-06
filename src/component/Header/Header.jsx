import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import './style.css';

export default class Header extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        push: PropTypes.func.isRequired,
        chats: PropTypes.object.isRequired,
        profileInfo: PropTypes.object.isRequired,
    };

    handleNavigate = (link) => {
        this.props.push(link);
    };

    render() {
        return (
            <div className='header'>
                <div className='userArea'>
                    <Fab variant="extended" 
                    className='hederLink'
                    onClick={ () => this.handleNavigate('/profile/') }>
                        <p>{ this.props.profileInfo.userName }</p>
                    </Fab>
                </div>
                <div className='nameChat'>{this.props.title}</div>
            </div>
        )
    }
}