import React, {Component, Fragment, useEffect, useState} from 'react';

function NavBar(props) {

    // const [open, setOpen] = useState(false);
    // const [notifications, setNotifications] = useState([]);

    // const [showDot, setDot] = useState(localStorage.getItem("notify_user") ? true : false);

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const sortDate = (a,b) => {  
    //     var dateA = new Date(a.date).getTime();
    //     var dateB = new Date(b.date).getTime();
    //     return dateA > dateB ? -1 : 1;  
    // };
    
    // useEffect(() => {
    //     //  ID is required
    //     // props.dispatch(TokenService("getToken", "auth_user")).then((token) => {
    //         props.dispatch(APIService("POST", "GetPaymentData?query= GET_NOTIFICATION @ID = "+(localStorage.getItem("authentication") ? JSON.parse(localStorage.getItem("authentication")).USERID : "10017"), "")).then((data) => {
    //             if(data.data.status === 1000){
    //                 let list = data.data.data.sort(sortDate);
    //                 setNotifications(list);
    //             }
    //         }).catch((e) => {
    //             console.log(e)
    //         })
    //     // })
    // }, [])
    
    // const hideNotify = () => {
    //     // localStorage.removeItem("notify_user");
    //     props.dispatch(TokenService("removeToken", "notify_user")).then(() => {
    //         setDot(false);
    //     })
    // }

    // const format = (date) => {
    //     console.log("matched")
    //     let todayDate = new Date();
    //     let userDate = new Date(date);
        
    //     if(todayDate.setHours(0,0,0,0) === userDate.setHours(0,0,0,0)) {
    //         return moment(date).format("h:mm a")
    //     }
    //     else{
    //         return moment(date).format('DD/MM/YYYY');
    //     }
    // }

    return (
        <Fragment>
            {/* <MailExpectation open={open} handleClose={handleClose} /> */}
            <div className="sidenav-overlay" style={{display:'none', backgroundColor:'black', width:'100%', height:'100vh', opacity:'0.2', position:'fixed', zIndex:'99'}}></div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" id="pushMenu" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    {/* <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/" className="nav-link">Home</Link>
                    </li> */}
                    {/* <li className="nav-item d-none d-sm-inline-block">
                        <span className="nav-link" style={{cursor:'pointer'}} onClick={handleOpen}>Contact</span>
                    </li> */}
                </ul>

                {/* <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                        </div>
                    </div>
                </form> */}

        
            </nav>
        </Fragment>
    );
}

export default (NavBar);