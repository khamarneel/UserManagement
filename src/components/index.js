import React, { Fragment } from 'react';
import UserList from './User/list';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import NavBar from './Common/navbar/index';
import Sidenav from './Common/sidenav/index';
import UserDetail from './User/detail';

function User(){
    return (
        <Fragment>
            <div style={{backgroundColor:'#f4f6f9', minHeight: '100vh'}}>
                <NavBar />
                <Sidenav active="Trouble Ticket" />
                <div className="content-wrapper">
                    <Route exact path={"/"} render={
                        () => {
                        return (<Redirect to="/users" />)
                        } 
                    }/>
                    <Route exact path={"/users"} component={UserList}/>
                    <Route exact path={"/users/create"} component={UserDetail}/>
                    <Route exact path={"/users/edit/:id"} component={UserDetail}/>
                </div>
            </div>
        </Fragment>
    )
}

export default User;