import React, {Component, Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom';

class Sidenav extends Component {

    constructor(props){
        super(props);
        this.state = {
            navList : [
                {
                    title: 'User',
                    icon: 'fas fa-box',
                    url: '/'
                },
            ],
            userData : {}
        }
    }

    getAlphabet = (letter) => {
        if(letter){
            return letter[0];
        }
        else{
            return 'U'
        }
    }

    render(){
        return (
            <Fragment>
                <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{position:'fixed'}}>
                    <div className="sidebar">               
                        <div className="user-panel mt-5 pb-4 mb-3" style={{textAlign:'center'}}>
                            <div style={{width:'100%', border:'0px solid red'}}>
                                <p className="img-circle elevation-2" style={{backgroundColor:'white', width:'70px', margin:'auto', fontSize:'40px', fontWeight:'bold'}}>
                                    {
                                        <span className="alphabet">U</span>    
                                    }
                                </p>
                            </div>
                            <div style={{width:'100%', border:'0px solid red', marginTop:'15px'}}>
                                <span className="d-block" style={{color:'#c2c7d0', textTransform:'uppercase'}}>{this.state.userData.USERNAME || 'USER'}</span>
                            </div>
                            <div style={{width:'100%', border:'0px solid red', marginTop:'0px'}}>
                                <span className="d-block" style={{fontSize:'12px', color:'#E3E3E3', letterSpacing:'1px'}}>{this.state.userData.Email || 'user@xyz.com'}</span>
                            </div>
                        </div>
                        
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {
                                    this.state.navList.map((item, index) => {
                                        return (
                                            <li key={index} className="nav-item">
                                                {
                                                    <Link to={item.url} className="nav-link active">
                                                        <i className={"nav-icon "+item.icon}></i>
                                                        <p style={{marginLeft:'10px'}}>{item.title}</p>
                                                    </Link>
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </aside>
            </Fragment>
        )
    }
       
}

export default (withRouter(Sidenav));