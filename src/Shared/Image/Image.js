import React from 'react';

function LazyImage({ src, alt }) {
    return (
        <figure>
            <img height="100%" width="100%" src={src} alt={alt} />
        </figure>
    );
}

export default LazyImage;
