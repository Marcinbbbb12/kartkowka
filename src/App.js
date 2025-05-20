import React from "react";
import Zdjecia from "./zdjecia.js";

const Zdjeciaa = ({ images = [] }) => {
    return (
        <div className="zdjecia">
            {images.map((image) => (
                <img key={image.id} src={image.imageUrl} alt={`Img ${image.id}`} />
            ))}
            <Zdjecia></Zdjecia>
        </div>
    );
};

export default Zdjeciaa;