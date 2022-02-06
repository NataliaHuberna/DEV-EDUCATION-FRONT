import './App.css';
import React from "react";
import Ball from "./Ball";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.canvas = null;
        this.ctx = null;
        this.width = null;
        this.height = null;
        this.balls = [];
        this.text = 0;
        this.state = {
            text : 40,
            isFrame: true,
        };
    }
    
    setNewText = () => this.setState({text: this.state.text += 1});
    
    loop = () => {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        while (this.balls.length < 15) {
            const size = this.random(30, 80);
            const x = this.random(0 + size, this.width - size);
            const y = this.random(0 + size, this.height - size);
            const speedX = this.random(-3, 3);
            const speedY = this.random(-3, 3);
            const red = this.random(0, 255);
            const green = this.random(0, 255);
            const blue = this.random(0, 255);
            
            const ball = new Ball(
                this.ctx, x, y, speedX, speedY,
                "rgb(" + red + "," + green + "," + blue + ")",
                size, this.state.text
            );
            this.balls.push(ball);
        }
        
        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].draw();
            this.balls[i].update(this.width, this.height);
        }
        
        if(this.state.isFrame){
            requestAnimationFrame(this.loop);
        } else {
            this.timerId = setTimeout(()=>{
               return this.loop();
            }, 1000)
        }
    };
    
    random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    componentDidMount() {
        this.canvas = this.canvasRef;
        this.ctx = this.canvas.current.getContext("2d");
        this.width = this.canvas.current.width;
        this.height = this.canvas.current.height;
        this.interval = setInterval(()=>this.setNewText(), 1000);
        this.loop();
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.timerId);
    }
    
    toggleAnimation = ()=> this.setState({isFrame: !this.state.isFrame})
    
    render() {
        return (
            <div className='main-wrapper'>
                <h1>{this.state.isFrame?'RequestAnimationFrame works': 'SetTimeOut works'}</h1>
                <button onClick={this.toggleAnimation}>
                    {this.state.isFrame?'Turn to SetTimeOut': 'Turn to RequestAnimationFrame'}
                </button>
                <canvas
                    className='paint'
                    ref={this.canvasRef}
                    width={'1000px'}
                    height={'800px'} />
            </div>
        );
    }
}

export default App;
