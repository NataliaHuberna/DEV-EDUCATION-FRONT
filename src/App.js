import React, { Component } from 'react';
import './App.scss';
import Pagination from './components/Pagination/Pagination';
import FullPicture from './components/FullPicture/FullPicture';
import Picture from './components/Picture/Picture';
import { API_URL } from './constants/api';
import Loader from './components/Loader/Loader';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlFullPicture: '',
            imgUrls: [],
            urls: [],
            isLoading: true,
            currentPage: 1,
        };
    }



    switchPage = (page) => {
        this.setState({currentPage: page, urls: this.state.imgUrls.slice((this.state.currentPage - 1) * 6, this.state.currentPage * 6)});
    };

    componentDidMount() {
        this.getImgUrls();
    }

    getImgUrls = async () => {
        try {
            this.setState({ isLoading: true });
            const { data } = await axios.get(API_URL);
            this.setState({ imgUrls: data.message, urls: this.state.imgUrls.slice(0, 6)});
        } finally {
            this.setState({ isLoading: false });
        }
    };

    setUrlToState = (event) => this.setState({ urlFullPicture: event.target.src });
    
    removeUrlFromState = (event) => this.setState({ urlFullPicture: '' });

    render() {
        return (
            <div className="App">
                <header className="header">
                    <div className="header__content">
                        <a href="index.html" className="header__logo">
                            Pictures Gallery
                        </a>
                        <Pagination switchPage={this.switchPage} currentPage={this.state.currentPage} />
                    </div>
                </header>
                <div className="container">
                    {this.state.urlFullPicture && (
                        <FullPicture
                        url={this.state.urlFullPicture}
                        removeUrlFromState={this.removeUrlFromState}
                        />
                    )}
                    <div className="pictures">
                        {this.state.isLoading ? (
                        <Loader />
                        ) : this.state.imgUrls.length ? (
                    this.state.urls.map((element) => (
                            <Picture
                                key={element}
                                url={element}
                                setUrlToState={this.setUrlToState}
                            />
                            ))
                        ) : (
                        <h1>You have no images!</h1>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
