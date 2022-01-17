import React, { Component } from 'react';
import { Howl } from 'howler';
import './App.css';

const tracks = [
  {
    title: 'Keeps Me Alive',
    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7c/09/e3/7c09e30a-db4a-fe05-b4b1-14cedce9035a/mzaf_6123434045560156085.plus.aac.ep.m4a',
  },
  {
    title: 'ARE WE STILL FRIENDS?',
    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4a/8c/a4/4a8ca4b8-4646-7348-8141-7cc5225359a7/mzaf_16944779764029044585.plus.aac.ep.m4a',
  },
  {
    title: 'Out Of Your League',
    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/92/4b/ee/924beea4-fbd9-4e6d-833b-4f22f997d804/mzaf_12848009722782109732.plus.aac.p.m4a',
  },
  {
    title: 'Right on Time',
    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a8/6b/b9/a86bb986-52d7-1a48-8ddd-1e18e426ba4d/mzaf_13077803543177244660.plus.aac.ep.m4a',
  },
  {
    title: 'Nothing Without You',
    url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0e/98/cc/0e98ccfd-0c64-cec0-9f28-9e52819df8ea/mzaf_8469049797695259587.plus.aac.ep.m4a',
  },
];

class App extends Component {
    constructor() {
        super();
        this.state = {
        sound: new Howl({
            src: tracks[0].url,
        }),
        currentTrack: 0,
        isPlaying: false,
        };
    }

    componentDidUpdate() {
        if (this.state.isPlaying) {
        this.state.sound.play();
        }
    }

    setData() {
        this.setState({
        sound: new Howl({
            src: tracks[this.state.currentTrack].url,
        }),
        });
    }

    playHandler() {
        this.state.sound.play();
        this.setState({ isPlaying: true });
    }

    nextTrack() {
        this.state.sound.stop();
        this.setState((prevState) => {
        const nextTrack = tracks[prevState.currentTrack + 1]
            ? prevState.currentTrack + 1
            : 0;
        return {
            ...prevState,
            sound: new Howl({
            src: tracks[nextTrack].url,
            }),
            currentTrack: nextTrack,
            isPlaying: true,
        };
        });
    }

    prevTrack() {
        this.state.sound.stop();
        this.setState((prevState) => {
        const nextTrack = tracks[prevState.currentTrack - 1] ? prevState.currentTrack - 1 : tracks.length - 1;
        return {
            ...prevState,
            sound: new Howl({
            src: tracks[nextTrack].url,
            }),
            currentTrack: nextTrack,
            isPlaying: true,
        };
        });
    }

    render() {
        return (
        <div className="App">
            <h1 id="title">{tracks[this.state.currentTrack].title}</h1>
            <div className="player-controls">
            <button onClick={() => this.prevTrack()}>&laquo;</button>
            <button
                onClick={() => {
                this.playHandler();
                }}
                disabled={this.state.isPlaying}
            >
                &#9658;
            </button>
            <button
                onClick={() => {
                this.state.sound.stop();
                this.setState({ isPlaying: false });
                }}
                disabled={!this.state.isPlaying}
            >
                &#9899;
            </button>
            <button onClick={() => this.nextTrack()}>&raquo;</button>
            </div>
        </div>
        );
    }
}

export default App;
