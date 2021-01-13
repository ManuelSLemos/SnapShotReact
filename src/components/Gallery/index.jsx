import React, { Component } from 'react';
import axios from 'axios';

import Image from './Image';

import './style.css';


class Gallery extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            images: [],
        }
    }

    componentDidMount = () => {

        axios.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ae5995c1becdfbd7866a34ff6b593ed6&tags=mountain&per_page=24&format=json&nojsoncallback=1").then( api => {
            this.setState({ images: api.data.photos.photo});
        });

    };

    render(){
        return (
            <section className="gallery-grid">
                { this.state.images?.map( ({owner, id, title}) => (
                    <Image owned={owner} id={id} title={title} key={id} /> 
                ))}
            </section>
        )
    }
}

export default Gallery