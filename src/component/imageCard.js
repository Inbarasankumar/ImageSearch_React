import React from 'react';

class ImageCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.ImageRef = React.createRef();
        this.state={spans:0};
    }
    componentDidMount()
    {
        this.ImageRef.current.addEventListener('load',this.setSpans)
    }

    setSpans=()=>
    {
            const height=this.ImageRef.current.clientHeight;
            const spans = Math.ceil(height/10);
            this.setState({spans});
            
    }
    render()
    {
        const {description,urls}=this.props.image;
        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.ImageRef} src={urls.regular} alt={description}/>
            </div>
        )
    }
}

export default ImageCard;