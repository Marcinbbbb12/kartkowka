import dane from "./dane";
import React, { useState } from "react";

const categoriesMap = {
    1: "kwiaty",
    2: "Zwierzeta",
    3: "Samochody",
};
const Zdjecia = () => {
    const [filters, setFilters] =
        useState({
            1: true,
            2: true,
            3: true,
        });
    const toggleCategory = (cat) => {
        setFilters({ ...filters, [Number(cat)]: !filters[Number(cat)] });
    };
        const increaseDownload = (index) => {
            const updatedData = dane.map((img, idx) =>
                idx === index ? { ...img, downloads: img.downloads + 1 } : img
            );
            setFilters({ ...filters });
        };
    return (
        <div>
            <h1>Kategorie zdjec</h1>
            {Object.entries(categoriesMap).map(([key, label]) => (
                <label key={key}
                       style={{ marginRight: "10px" }}>
                    <input type="checkbox"
                           checked={filters[key]}
                           onChange={() => toggleCategory(key)} />
                    {label}
                </label>
            ))}
            <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
                {/* Assuming 'dane' is the array of your image data */}
                {dane.filter((img) => filters[img.category]).map((img, index) => (
                    <div
                        key={index}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            padding: "10px",
                            margin: "10px",
                            width: "200px",
                        }}>
                        <img src={`/assets/${img.filename}`}
                             alt={img.alt}
                             style={{
                                 width: " 100%",
                                 borderRadius: "10px"
                             }} />
                        <p>Pobrań: {img.downloads}</p>
                        <button onClick={() => increaseDownload(index)}>Pobierz</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Zdjecia;