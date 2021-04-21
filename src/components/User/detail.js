import React, { Component, Fragment } from 'react';
import PageTitle from '../Common/pageTitle';
import TextField from '@material-ui/core/TextField';
import DefaultImage from '../../assets/default.jpg';

class UserDetail extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: "Create User",
            dataset: null,
            edit: false,
            activeSet: {}
        }
    }

    componentDidMount(){
        console.log(this.props);
        if(this.props.match.params && this.props.match.params.id){
            this.setState({
                title: "Update User",
                edit: true
            }, () => {
                let set = JSON.parse(localStorage.getItem("dataset"));
                let activeSet = "";
                set.map((item, index) => {
                    if(item.id === this.props.match.params.id){
                        activeSet = item;
                    }
                })

                if(activeSet){
                    this.setState({
                        dataset: set,
                        activeSet: activeSet
                    })
                }
                else{
                    this.goBack();
                }
            })
        }
        else{
            this.setState({
                dataset: JSON.parse(localStorage.getItem("dataset")),
                edit: false
            })
        }
    }

    goBack = () => {
        this.props.history.push('/users');
    }

    createUser = (e) => {
        e.stopPropagation();
        e.preventDefault();

        let set = [ ...this.state.dataset ];
        let userObject = this.state.activeSet;
        userObject.id = this.randomString();
        userObject.picture = "";
        set.push(userObject);
        localStorage.setItem('dataset', JSON.stringify(set));
        this.goBack();
    }

    randomString() {
        let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < 22; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz,randomPoz+1);
        }
        return randomString;
    }

    updateUser = (e) => {
        e.stopPropagation();
        e.preventDefault();

        let set = [ ...this.state.dataset ];
        set.map((item, index) => {
            if(item.id === this.state.activeSet.id){
                item.firstName = this.state.activeSet.firstName;
                item.lastName = this.state.activeSet.lastName;
                item.email = this.state.activeSet.email;
            }
        })

        localStorage.setItem('dataset', JSON.stringify(set));
        this.goBack();
    }

    submitHandler = (e) => {
        if(this.state.activeSet.firstName && this.state.activeSet.lastName && this.state.activeSet.email){
            this.setState({
                errors: {
                    ...this.state.errors,
                    firstname: "",
                    lastname: "",
                    email: ""
                }
            }, () => {
                if(this.state.edit){
                    this.updateUser(e);
                }
                else{
                    this.createUser(e);
                }
            })
        }
        else{
            this.setState({
                errors: {
                    ...this.state.errors,
                    firstname: this.state.activeSet.firstName ? "" : "Firstname is required",
                    lastname: this.state.activeSet.lastName ? "" : "Lastname is required",
                    email: this.state.activeSet.email ? "" : "Email address is required",
                }
            })
        }
    }

    inputHandler = (key, value) => {
        console.log(key)
        this.setState({
            activeSet: {
                ...this.state.activeSet,
                [key]: value
            }
        })
    }

    render(){
        return (
            <Fragment>
                <PageTitle title={this.state.title} />
                <div className="container" style={{marginTop:'30px'}}>
                    {
                        this.props.match && this.props.match.params.id ? (
                            <div className="row" style={{textAlign:'center'}}>
                                <div className="col-12" style={{marginTop:'20px', marginBottom:'20px'}}>
                                    <img src={this.state.activeSet.picture ? this.state.activeSet.picture : DefaultImage} width="140px" height="140px" style={{borderRadius:'50%'}} />           
                                </div>
                            </div>
                        ) : null
                    }
                    <div className="row">
                        <div className="col-12" style={{marginTop:'20px'}}>
                            <TextField id="standard-basic" label="FirstName" onChange={(e) => this.inputHandler("firstName", e.currentTarget.value)} value={this.state.activeSet ? this.state.activeSet.firstName : ""} style={{width:'50%'}} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{marginTop:'20px'}}>
                            <TextField id="standard-basic" label="LastName" onChange={(e) => this.inputHandler("lastName", e.currentTarget.value)} value={this.state.activeSet ? this.state.activeSet.lastName : ""} style={{width:'50%'}} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12" style={{marginTop:'20px'}}>
                            <TextField id="standard-basic" label="Email Address" onChange={(e) => this.inputHandler("email", e.currentTarget.value)} value={this.state.activeSet ? this.state.activeSet.email : ""} style={{width:'50%'}} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12" style={{marginTop:'40px'}}>
                            <button onClick={this.goBack} style={{padding: '10px', backgroundColor:'#f44336', color:'white', border:'0px', fontSize:'16px', paddingLeft:'24px', paddingRight:'24px', marginRight:'10px'}}>Back</button>
                            <button onClick={this.submitHandler} style={{padding: '10px', backgroundColor:'#28a745', color:'white', border:'0px', fontSize:'16px', paddingLeft:'20px', paddingRight:'20px'}}>Submit</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default UserDetail;