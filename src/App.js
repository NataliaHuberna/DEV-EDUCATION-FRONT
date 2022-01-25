import React, { Component } from 'react';
import ResponsiveTable from './components/ResponsiveTable/ResponsiveTable';
import './App.scss';
import { API_URL } from './constants/api';
import Loader from './components/Loader/Loader';
import axios from 'axios';

const columns = {
    name: 'Name',
    username: 'UserName',
    email: 'E-mail',
    phone: 'Phone',
    website: 'Website',
    address:'Address'
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: true,         
        };
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        try {
            this.setState({ isLoading: true });
            const { data } = await axios.get(API_URL);
            this.setState({ users: data });
        } finally {
            this.setState({ isLoading: false });
        }
    };

    render() {
        return (
            <div className="App">
                {this.state.isLoading
                    ? (<Loader />)
                    : this.state.users.length
                        ? (<ResponsiveTable rows={this.state.users} columns={columns} />)
                        : (<h1>You have no users!</h1>)
                }
            </div>
        );
    }
}

export default App;
