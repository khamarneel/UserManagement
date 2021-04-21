import React, { useState } from 'react';
import { withRouter } from 'react-router';

// import TicketModal from '../createTicketModal';

function PageTitle(props) {
    
    const createUser = () => {
        props.history.push('/users/create');
    }

    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-6">
                        <h1 className="m-0 text-dark" style={{fontFamily: "Source Sans Pro, sans-serif", textAlign:'left'}}>{props.title}</h1>
                    </div>

                {
                    (props.title === "Users") ? (
                        <div className="col-6" style={{textAlign:'right'}}>
                            <button style={{paddingLeft:'10px', paddingRight:'10px', backgroundColor:'#28a745', color:'white', border:'0px', paddingTop:'6px', paddingBottom:'6px'}} onClick={createUser}>Create User</button>
                        </div>
                    ) : null
                }
                </div>
                {
                    // (props.title === "Tickets") ? (
                    // ) : null
                }
            </div>
        </div>
    )
}

export default withRouter(PageTitle);