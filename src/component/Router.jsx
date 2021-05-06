import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './Layout/Layout';
import Profile from './../containers/Profile';
import MessageField from './../containers/MessageField';
import './../style/style.css';
import { CHAT_PATTERN } from './../constans';

export default class Router extends React.Component {
    static propTypes = {
        chats: PropTypes.object.isRequired
    };

   render() {
       return (
           <Switch>
               <Route exact path='/' render={() => (
                    <Redirect to='/profile'/>
                )}  />
                <Route path={ CHAT_PATTERN } render={(props) => {
                    const chatId = props.match.params.id;

                    return (
                        <Layout
                            title={this.props.chats[chatId]?.title}
                            chatId={chatId}>
                            <MessageField chatId={chatId} />
                        </Layout>
                    );
                }}/>
                <Route path='/profile' render={() => (
                    <Layout title='Ваш профиль'>
                        <Profile />
                    </Layout>
                )} />
           </Switch>
       )
   }
}
