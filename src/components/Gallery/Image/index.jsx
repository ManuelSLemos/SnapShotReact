import React from 'react';

const Image = ({owned, id, title}) => (
    <img src={`https://www.flickr.com/photos/${owned}/${id} `} alt={title} />
);

export default Image;