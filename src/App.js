import './App.css';
import React, { Component } from 'react';
import { colorSwatches } from './styles';
import Button from './Button';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'draw',
            pen: 'up',
            currentColor: 'black',
            fillColor: 'white',
            penCoords: [],
            lineWidth: 10,
        };
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        this.reset();
    }

    draw = () => this.setState({ mode: 'draw',});

    erase = () => this.setState({mode: 'erase',});
    
    drawing = (e) => {
        if (this.state.pen === 'down') {
            this.ctx.beginPath();
            this.ctx.lineWidth = this.state.lineWidth;
            this.ctx.lineCap = 'round';

            if (this.state.mode === 'draw') {
                this.ctx.strokeStyle = this.state.currentColor;
            }

            if (this.state.mode === 'erase') {
                this.ctx.strokeStyle = this.state.fillColor;
            }

            this.ctx.moveTo(this.state.penCoords[0], this.state.penCoords[1]); 
            this.ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); 
            this.ctx.stroke();

            this.setState({
                penCoords: [e.nativeEvent.offsetX, e.nativeEvent.offsetY],
            });
        }
    };

    penDown = (e) => {
        this.setState({
            pen: 'down',
            penCoords: [e.nativeEvent.offsetX, e.nativeEvent.offsetY],
        });
    };

    penUp = () => this.setState({ pen: 'up',});
    penSizeUp = () => this.setState((prevState) => ({ ...prevState, lineWidth: (prevState.lineWidth += 5) }));
    penSizeDown = () => this.setState((prevState) => ({ ...prevState, lineWidth: (prevState.lineWidth -= 5) }));

    setColor = (color) => this.setState({currentColor: color});

    fillCanvas = () => {
        this.ctx = this.canvasRef.current.getContext('2d');
        this.ctx.fillStyle = this.state.currentColor;
        this.ctx.fillRect(0, 0, 800, 600);
        this.setState({ fillColor: this.state.currentColor });
    };

    reset = () => {
        this.setState({
            mode: 'draw',
            pen: 'up',
            lineWidth: 10,
            currentColor: 'black',
            fillColor: 'white',
        });

        this.ctx = this.canvasRef.current.getContext('2d');
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, 800, 600);
        this.ctx.lineWidth = 10;
    }

    render() {
        return (
            <div className="maindiv">
                <p>Super Simple React Drawing</p>
                <canvas
                    ref={this.canvasRef}
                    width="800px"
                    height="600px"
                    onMouseMove={this.drawing}
                    onMouseDown={this.penDown}
                    onMouseUp={this.penUp}
                ></canvas>
                <div className="controls">
                    <button className={this.state.mode === 'draw' ? 'active' : ''} onClick={this.draw}>
                        Draw
                    </button>
                    <button className={this.state.mode === 'erase' ? 'active' : ''} onClick={this.erase}>
                        Erase
                    </button>
                    <button onClick={this.penSizeUp}>Pen Size +</button>
                    <div className="size">{this.state.lineWidth}</div>
                    <button onClick={this.penSizeDown}>Pen Size -</button>
                    <button onClick={this.fillCanvas}>Fill</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
                <div className="colors">
                    {Object.keys(colorSwatches).map((color) => {
                        return (
                            <Button
                                className={this.state.currentColor === color ? 'active' : ''}
                                style={colorSwatches[color]}
                                onClick={() => this.setColor(color)}
                                contentKey={color}
                            />
                        );
                    })}

                </div>
            </div>
        );
    }
}

export default App;
