import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModelSelector = () => {
    const [models, setModels] = useState([]);

    useEffect(() => {
        const fetchModels = async () => {
            const response = await axios.get('http://localhost:3001/models');
            console.log(response);
            setModels(response.data);
        };
        fetchModels();
    }, []);

    return (
        <div className="modelSelector">
            <select>
                {models.map((model, index) => (
                    <option key={index} value={model}>
                        {model}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ModelSelector;
