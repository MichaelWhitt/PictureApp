import React, {createRef} from "react";

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {spans : 0}
        this.imageRef = createRef(); //same as React.createRef()
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);

        //risky to pull data out in componentDidMount because of how quickly the information loads...but it's working
        //console.log(this.imageRef.current.clientHeight)
    }

    setSpans = () => {
        //console.log(this.imageRef.current.clientHeight)
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        //spans : spans
        this.setState({spans})
    }

    render(){
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard;