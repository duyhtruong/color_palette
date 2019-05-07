import React from 'react';

class ColorPalette extends React.Component{
	state = {
		imgWidth: 0,
		imgHeight: 0
	}


	componentDidMount(){

		this.setState({
			imgWidth: this.refs.image.width,
			imgHeight: this.refs.image.height
		})

	}

	renderCanvas(){
		if(this.state.imgWidth != 0){
			return(
				<div>
				<canvas ref ='canvas' width={this.state.imgWidth} height={this.state.imgHeight} />
				</div>
			)
		}
	}

	render(){
		return(
			<div>
			

			{this.renderCanvas()}
			<img ref='image' src='https://lh3.googleusercontent.com/szO_KbOe_RmSIoO0rlB7kYE5I1hpJJlImM8iYFJLzsrlnBGnQ48OldgB0W86AvJPz8qaqKZK2KRUoBJc2A67dKdFtLoBGOACkMV6MvYXeSU4C3nJ_XnoSW02K91l9CHF2WsR94d89Ra3-q0hx0iEgBwJez_jZ3Fxv8NQgdda4SQ18M-eGRpPWTYe86UMwSJrHlLYzTzlw0I0SRRUV8IO3Azz_--tEHe6AT54KoW5rWmRoHMzmx-ZwuuTKr3X1hY4-rgZmgDUR62Tn9eIA22gF5mFXhZPTwTjiQwF8cdfGqCJ0bKgITG2Ks5UcjeRRaMmXTUlP4_8kmdOyVx0QyGIUw08f6yqoChFhBdqhZiouTORSN5jKq03U4-aI-a_OrzOm8DkalP2VHHjmwTijvfjHxCZc0LRxZC4fESpt7T8FYb7bntc2r73FoboN2EniEJweu2O3oLz8FaMlG08DQvXOyTflbIoUJILPeOw_3XwE7Bw5nP_EfcusKGwEu-8_6EgpeS19OzUxbyf8T1tCh5sMYRqKLaG5hSJAchvGeP2TaTu73qJXbNm7NegLSGLVFiHqBM1Fv-zXp4J_HadjK0jzgOiCBMk0OvHBSpL5omQQTLQG1MdTfEHSeGB0MG0jQQa0M-vp8RQIrff4Zgi__1_DGQPuAotqOE=s300-no'/>

			</div>
		)
	}
}

export default ColorPalette;