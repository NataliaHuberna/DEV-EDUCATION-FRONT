import './App.scss';
import React, { Component } from 'react';
import Row from './Components/Row/Row';
import Button from './Components/Common/Button/Button';
import Header from './Components/Header/Header';
import { toMatrix } from './helpers/buildBoard';
import { WIDTH, HEIGHT } from './constants/boardSize';
import { checkAll } from './helpers/checkBoard';
import { WIN_FIRST, WIN_SECOND, GAME_DRAW, GAME_OVER } from './constants/message';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: 1,
            player2: 2,
            currentPlayer: null,
            board: [],
            gameOver: false,
            message: '',
        };
    }

    initBoard = () => {
        const newBlank = new Array(WIDTH * HEIGHT).fill(null); 
        const board = toMatrix(newBlank, WIDTH);
        this.setState({
            board,
            currentPlayer: this.state.player1,
            gameOver: false,
            message: '',
        });
    }

    togglePlayer = () => {
        return this.state.currentPlayer === this.state.player1 ? this.state.player2 : this.state.player1;
    }

    play = (column) => {
        if (!this.state.gameOver) {
            const board = this.state.board.reverse();
            const row = board.findIndex((element) => element[column] === null)
            board[row][column] = this.state.currentPlayer;
            board.reverse();

            let result = checkAll(board);
            switch (result) {
                case this.state.player1:
                    this.setState({
                        board,
                        gameOver: true,
                        message: WIN_FIRST,
                    });
                    break;
                case this.state.player2:
                    this.setState({
                        board,
                        gameOver: true,
                        message: WIN_SECOND,
                    });
                    break;
                case 'draw':
                    this.setState({ board, gameOver: true, message: GAME_DRAW });
                    break;
                default:
                    this.setState({ board, currentPlayer: this.togglePlayer() });
            }
        } else {
            this.setState({ message: GAME_OVER });
        }
    };
 
    componentDidMount() {
        this.initBoard();
    }

    render() {
        return (
            <div>
                <Header/>
                <Button initBoard={this.initBoard} contentKey={'New Game'} />
                <table>
                    <thead></thead>
                    <tbody>
                        {this.state.board.map((row, i) => (
                            <Row key={i} row={row} play={this.play} />
                        ))}
                    </tbody>
                </table>

                <p className="message">{this.state.message}</p>
            </div>
        );
    }
}

export default App;
