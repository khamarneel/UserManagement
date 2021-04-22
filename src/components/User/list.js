import React, { Component, Fragment } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import PageTitle from '../Common/pageTitle/index';
import { LoginOutlined } from '@ant-design/icons';
import DefaultImage from '../../assets/default.jpg';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// import Icon from '@ant-design/icons';

const data = [
    {
        "id": "Xw09eUBrQvMYfE7C2W6A",
        "email": "sergio.ferrer@example.com",
        "lastName": "Ferrer",
        "picture": "https://randomuser.me/api/portraits/men/29.jpg",
        "title": "mr",
        "firstName": "Sergio"
    },
    {
        "id": "YxRHbomMRlVEhlExIZB3",
        "picture": "https://randomuser.me/api/portraits/women/46.jpg",
        "lastName": "Jokela",
        "email": "emma.jokela@example.com",
        "title": "mrs",
        "firstName": "Emma"
    },
    {
        "id": "ZKg1dpoDZebHPffPDpH6",
        "firstName": "Donald",
        "title": "mr",
        "lastName": "Hopkins",
        "picture": "https://randomuser.me/api/portraits/men/73.jpg",
        "email": "donald.hopkins@example.com"
    },
    {
        "id": "ZSY60d3V7ICT1Zx7Zzul",
        "title": "mr",
        "firstName": "Jeremy",
        "lastName": "Morin",
        "picture": "https://randomuser.me/api/portraits/men/60.jpg",
        "email": "jeremy.morin@example.com"
    },
    {
        "id": "ZsqN0O439byEzN12MzFB",
        "lastName": "Harrison",
        "picture": "https://randomuser.me/api/portraits/women/20.jpg",
        "email": "susie.harrison@example.com",
        "title": "mrs",
        "firstName": "Susie"
    },
    {
        "id": "a9IzuhtufH0GNRAyHCoT",
        "firstName": "Karoline",
        "lastName": "Sviggum",
        "picture": "https://randomuser.me/api/portraits/women/61.jpg",
        "title": "mrs",
        "email": "karoline.sviggum@example.com"
    },
    {
        "id": "b7rf3uChfwFsOWoUB686",
        "lastName": "Dubois",
        "picture": "https://randomuser.me/api/portraits/women/11.jpg",
        "firstName": "Clea",
        "title": "miss",
        "email": "clea.dubois@example.com"
    },
    {
        "id": "bTqcBLxlfDvEspFxHsfL",
        "picture": "https://randomuser.me/api/portraits/men/45.jpg",
        "lastName": "Rodriguez",
        "firstName": "Adrian",
        "title": "mr",
        "email": "adrian.rodriguez@example.com"
    },
    {
        "id": "begkLSG5VUuUpAExSIru",
        "email": "lucas.larsen@example.com",
        "picture": "https://randomuser.me/api/portraits/men/50.jpg",
        "lastName": "Larsen",
        "firstName": "Lucas",
        "title": "mr"
    },
    {
        "id": "dIuIrJf2Bwx7IIYxI2hn",
        "picture": "https://randomuser.me/api/portraits/women/89.jpg",
        "email": "milla.pollari@example.com",
        "title": "miss",
        "lastName": "Pollari",
        "firstName": "Milla"
    },
    {
        "id": "dLkRGyirQbZ541rWAYMp",
        "picture": "https://randomuser.me/api/portraits/men/95.jpg",
        "firstName": "Lyam",
        "lastName": "Morin",
        "email": "lyam.morin@example.com",
        "title": "mr"
    },
    {
        "id": "e9PLXpcEosSNO9RliQwr",
        "picture": "https://randomuser.me/api/portraits/men/62.jpg",
        "email": "nenad.leroy@example.com",
        "lastName": "Leroy",
        "firstName": "Nenad",
        "title": "mr"
    },
    {
        "id": "f5UrLqz1FUazXX9clfs3",
        "firstName": "Cristobal",
        "picture": "https://randomuser.me/api/portraits/men/31.jpg",
        "lastName": "Soler",
        "title": "mr",
        "email": "cristobal.soler@example.com"
    },
    {
        "id": "fEq8zN3WCYwcp8eXEzlo",
        "picture": "https://randomuser.me/api/portraits/men/38.jpg",
        "email": "siem.marcelissen@example.com",
        "title": "mr",
        "firstName": "Siem",
        "lastName": "Marcelissen"
    },
    {
        "id": "fKRsOY17DxmTa6klEIKn",
        "picture": "https://randomuser.me/api/portraits/men/22.jpg",
        "firstName": "Nikolaj",
        "title": "mr",
        "lastName": "Larsen",
        "email": "nikolaj.larsen@example.com"
    },
    {
        "id": "g8bWE0cttjuu6IpAbDIm",
        "firstName": "Sara",
        "lastName": "Andersen",
        "title": "ms",
        "email": "sara.andersen@example.com",
        "picture": "https://randomuser.me/api/portraits/women/58.jpg"
    },
    {
        "id": "gkE6PsDnmQOE7NbLoEQN",
        "firstName": "Debbie",
        "picture": "https://randomuser.me/api/portraits/women/86.jpg",
        "title": "miss",
        "email": "debbie.garcia@example.com",
        "lastName": "Garcia"
    },
    {
        "id": "h1c3zNTNLmnJP7URILG2",
        "lastName": "Holland",
        "firstName": "Benjamin",
        "title": "mr",
        "email": "benjamin.holland@example.com",
        "picture": "https://randomuser.me/api/portraits/men/58.jpg"
    },
    {
        "id": "iBVDRGdTqa7yXy6b9kTt",
        "picture": "https://randomuser.me/api/portraits/men/73.jpg",
        "title": "mr",
        "firstName": "Albert",
        "email": "albert.diez@example.com",
        "lastName": "Diez"
    },
    {
        "id": "iCyMy7qU4HZ4KE3R9z0N",
        "picture": "https://randomuser.me/api/portraits/women/5.jpg",
        "lastName": "Lima",
        "title": "mrs",
        "email": "carolina.lima@example.com",
        "firstName": "Carolina"
    },
    {
        "id": "iIVwUA3a0hNCBpwSduDv",
        "firstName": "Océane",
        "picture": "https://randomuser.me/api/portraits/women/51.jpg",
        "title": "miss",
        "email": "oceane.denis@example.com",
        "lastName": "Denis"
    },
    {
        "id": "iPtCK8XGSKJ6dhCgm4EZ",
        "picture": "https://randomuser.me/api/portraits/men/13.jpg",
        "email": "lance.foster@example.com",
        "lastName": "Foster",
        "title": "mr",
        "firstName": "Lance"
    },
    {
        "id": "jpxJ6CnDgBUcqmMTczMh",
        "email": "edina.barbosa@example.com",
        "firstName": "Édina",
        "title": "ms",
        "lastName": "Barbosa",
        "picture": "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
        "id": "k4XjnmBn5wFcptiDDDmo",
        "title": "mr",
        "picture": "https://randomuser.me/api/portraits/men/74.jpg",
        "email": "mads.andersen@example.com",
        "lastName": "Andersen",
        "firstName": "Mads"
    },
    {
        "id": "kZRHHEj0HBUjECjYcgdD",
        "firstName": "Ann",
        "picture": "https://randomuser.me/api/portraits/women/18.jpg",
        "title": "ms",
        "email": "ann.mason@example.com",
        "lastName": "Mason"
    },
    {
        "id": "mCynCk9ntQGzX9uxgqDx",
        "title": "mr",
        "firstName": "Leevi",
        "picture": "https://randomuser.me/api/portraits/men/67.jpg",
        "email": "leevi.savela@example.com",
        "lastName": "Savela"
    },
    {
        "id": "mHfQtRIKdbZiSGNcC1TO",
        "picture": "https://randomuser.me/api/portraits/men/52.jpg",
        "firstName": "Kent",
        "lastName": "Brewer",
        "title": "mr",
        "email": "kent.brewer@example.com"
    },
    {
        "id": "mdTSbXxKe9GvdxEqaDsm",
        "email": "gonzaga.ribeiro@example.com",
        "title": "mr",
        "firstName": "Gonzaga",
        "picture": "https://randomuser.me/api/portraits/men/10.jpg",
        "lastName": "Ribeiro"
    },
    {
        "id": "nVFM8iffOPKKeBTkBgXa",
        "email": "anaelle.dumas@example.com",
        "picture": "https://randomuser.me/api/portraits/women/25.jpg",
        "lastName": "Dumas",
        "title": "mrs",
        "firstName": "Anaëlle"
    },
    {
        "id": "npLv8ez55w78CLcOygFT",
        "firstName": "Jan",
        "picture": "https://randomuser.me/api/portraits/men/60.jpg",
        "email": "jan.siebert@example.com",
        "lastName": "Siebert",
        "title": "mr"
    },
    {
        "id": "ntZFBCTGDJXbMeeg4JHX",
        "firstName": "Sohan",
        "lastName": "Pierre",
        "email": "sohan.pierre@example.com",
        "picture": "https://randomuser.me/api/portraits/men/77.jpg",
        "title": "mr"
    },
    {
        "id": "nwhQ6OeYDLrAZGwKXuq5",
        "lastName": "Gutierrez",
        "picture": "https://randomuser.me/api/portraits/women/31.jpg",
        "email": "beatriz.gutierrez@example.com",
        "firstName": "Beatriz",
        "title": "mrs"
    },
    {
        "id": "nye7EW8urdTCL9IhuIjL",
        "title": "mr",
        "lastName": "Rocha",
        "email": "mem.rocha@example.com",
        "firstName": "Mem",
        "picture": "https://randomuser.me/api/portraits/men/59.jpg"
    },
    {
        "id": "osBqWa1LxEpRXOJOSFx1",
        "title": "miss",
        "email": "naomi.rodrigues@example.com",
        "firstName": "Naomi",
        "picture": "https://randomuser.me/api/portraits/women/39.jpg",
        "lastName": "Rodrigues"
    },
    {
        "id": "q2PJeghNP3z6PYLbkJlq",
        "picture": "https://randomuser.me/api/portraits/men/41.jpg",
        "title": "mr",
        "lastName": "Degner",
        "firstName": "Eckard",
        "email": "eckard.degner@example.com"
    },
    {
        "id": "qq5YlULCty4YO70CzAgA",
        "title": "ms",
        "firstName": "Ane",
        "lastName": "Frafjord",
        "email": "ane.frafjord@example.com",
        "picture": "https://randomuser.me/api/portraits/women/54.jpg"
    },
    {
        "id": "t3k3dx7zDMAKjCEeXl9Q",
        "title": "mr",
        "picture": "https://randomuser.me/api/portraits/men/54.jpg",
        "firstName": "Marius",
        "email": "marius.larsen@example.com",
        "lastName": "Larsen"
    },
    {
        "id": "u2EZB3b8Zdt7XblIViuD",
        "lastName": "Vestering",
        "picture": "https://randomuser.me/api/portraits/women/89.jpg",
        "firstName": "Edita",
        "email": "edita.vestering@example.com",
        "title": "miss"
    },
    {
        "id": "uABrZcuHGJnanoxlt53c",
        "email": "elliot.walker@example.com",
        "lastName": "Walker",
        "picture": "https://randomuser.me/api/portraits/men/53.jpg",
        "title": "mr",
        "firstName": "Elliot"
    },
    {
        "id": "uQrnqsqyh8FjSXAPc7oA",
        "email": "emilie.lambert@example.com",
        "title": "mrs",
        "picture": "https://randomuser.me/api/portraits/women/93.jpg",
        "firstName": "Emilie",
        "lastName": "Lambert"
    },
    {
        "id": "uUTSgR5dq8vvL6Rn26W3",
        "lastName": "Koivisto",
        "title": "ms",
        "firstName": "Nella",
        "picture": "https://randomuser.me/api/portraits/women/77.jpg",
        "email": "nella.koivisto@example.com"
    },
    {
        "id": "uVCZiSgGLhvKRo1v4Irw",
        "picture": "https://randomuser.me/api/portraits/men/76.jpg",
        "lastName": "Omahony",
        "title": "mr",
        "email": "alfredo.omahony@example.com",
        "firstName": "Alfredo"
    },
    {
        "id": "uiyDbZRueCtJ55fbHrqu",
        "email": "valentin.ortega@example.com",
        "firstName": "Valentin",
        "picture": "https://randomuser.me/api/portraits/men/3.jpg",
        "lastName": "Ortega",
        "title": "mr"
    },
    {
        "id": "vY6HOiJqekWiaRpKGgAs",
        "email": "milly.norman@example.com",
        "lastName": "Norman",
        "firstName": "Milly",
        "picture": "https://randomuser.me/api/portraits/women/31.jpg",
        "title": "miss"
    },
    {
        "id": "yLyiEdhLwMn5tOPA447y",
        "email": "andre.robert@example.com",
        "title": "mr",
        "firstName": "Andre",
        "lastName": "Robert",
        "picture": "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
        "id": "ykiaIBj7SJTlE0ITXFV9",
        "lastName": "Legrand",
        "firstName": "Charlotte",
        "email": "charlotte.legrand@example.com",
        "title": "ms",
        "picture": "https://randomuser.me/api/portraits/women/77.jpg"
    },
    {
        "id": "yzToqfdtGZmridroLRqf",
        "email": "jolanda.lacroix@example.com",
        "lastName": "Lacroix",
        "picture": "https://randomuser.me/api/portraits/women/32.jpg",
        "firstName": "Jolanda",
        "title": "mrs"
    },
    {
        "id": "z7bNiwksdexUDHPZxIM0",
        "firstName": "Väinö",
        "email": "vaino.sakala@example.com",
        "picture": "https://randomuser.me/api/portraits/men/56.jpg",
        "lastName": "Sakala",
        "title": "mr"
    },
    {
        "id": "zkmqMzTKYySr3OnEoekf",
        "title": "mr",
        "lastName": "Başoğlu",
        "picture": "https://randomuser.me/api/portraits/men/59.jpg",
        "firstName": "Kaya",
        "email": "kaya.basoglu@example.com"
    }
];

class UserList extends Component{
    // {
    //     "id": "Xw09eUBrQvMYfE7C2W6A",
    //     "email": "sergio.ferrer@example.com",
    //     "lastName": "Ferrer",
    //     "picture": "https://randomuser.me/api/portraits/men/29.jpg",
    //     "title": "mr",
    //     "firstName": "Sergio"
    // }
    constructor(props){
        super(props);
        this.state = {
            tableData: null,
            filteredData: null,
            searchTerm: '',
            columns: [
                {
                    title: "ID",
                    dataIndex: 'ID',
                    render: (value, record, index) => {
                        return {
                            props: {
                                style: { 
                                    fontWeight: "bold"
                                }
                            },
                            children: <div>{record.id}</div>
                        };
                    },
                },
                {
                    title: "Profile",
                    dataIndex: 'Profile',
                    render: (value, record, index) => {
                        return {
                            children: <img src={record.picture ? record.picture : DefaultImage} width={"45px"} height={"45px"} style={{borderRadius:'50px'}} />
                        };
                    }
                },
                {
                    title: "Firstname",
                    dataIndex: 'firstName',
                    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
                    sortDirections: ['descend', 'ascend']
                },
                {
                    title: "Lastname",
                    dataIndex: 'lastName',
                    sorter: (a, b) => a.lastName.localeCompare(b.lastName),
                    sortDirections: ['descend', 'ascend']
                },
                {
                    title: "Email Address",
                    dataIndex: 'email'
                    // sorter: (a, b) => a.email.length - b.email.length,
                    // sortDirections: ['descend', 'ascend']
                },
                {
                    title: "Action",
                    // dataIndex: 'TicketType',
                    render: (value, record, index) => {
                        return {
                            children: <LoginOutlined style={{fontSize:'20px', textAlign:'center', cursor:'pointer'}} onClick={() => this.handleEditModal(record)} />
                        }
                    },
                    sorter: (a, b) => a.email.length - b.email.length,
                    sortDirections: ['descend', 'ascend']
                },
            ]
        }
    }

    componentDidMount(){
        if(localStorage.getItem('dataset')){
            let set = JSON.parse(localStorage.getItem('dataset'));
            this.setState({
                tableData: set,
                filteredData: set
            })
        }
        else{
            this.setState({
                tableData: data,
                filteredData: data
            }, () => {
                localStorage.setItem("dataset", JSON.stringify(this.state.tableData))
            })
        }
    }

    handleEditModal = (record) => {
        this.props.history.push(`/users/edit/${record.id}`);
    }

    handleSearch = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(this.state.searchTerm){
            let filtersets = this.state.tableData.filter((item, index) => {
                let set = JSON.stringify(item);
                if(set.includes(this.state.searchTerm)){
                    return item;
                }
            })

            this.setState({
                filteredData: filtersets
            })
        }
        else{
            let data = [...this.state.tableData];
            this.setState({
                filteredData: data
            })
        }
    }

    inputHandler = (e) => {
        this.setState({
            "searchTerm": e.currentTarget.value
        })
    }

    render(){
        return(
            <Fragment>
                <PageTitle title={"Users"} />
                <div className="container">
                    <div className="row" style={{marginBottom:'20px', marginTop:'30px'}}>
                        <div className="col-3">
                            <TextField id="outlined-basic" onChange={this.inputHandler} label="Search Keyword" variant="outlined" style={{width:'100%', backgroundColor:'white'}} />
                        </div>
                        <div className="col-2">
                            <button onClick={this.handleSearch} style={{width:'100%', height:'55px', border:'0px', backgroundColor:'#ffc400', fontSize:'20px', color:'white'}}>Search</button>
                        </div>
                    </div>
                    <div className="row">
                        <Table style={{width:'100%'}} rowKey={record => record.picture}
                                        columns={this.state.columns} dataSource={this.state.filteredData} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default UserList;