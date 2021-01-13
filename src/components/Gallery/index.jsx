import React from 'react';

import Image from './Image';

import './style.css';

import api from '../../api/images.json';

const Gallery = () => {

    return (
        <section className="gallery-grid">
            { api.photos.photo?.map( ({owner, id, title}) => (
                <Image owned={owner} id={id} title={title} key={id} /> 
            ))}
        </section>
    )
}

export default Gallery