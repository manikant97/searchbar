import React, { useState } from 'react';
import SearchBar from './components/Search';

const App = () => {
    const dummyData = [
        'Apple',
        'Banana',
        'Orange',
        'Grapes',
        'Mango',
        'Pineapple',
        'Strawberry',
        'Watermelon',
    ];

    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (query) => {
        console.log('Searching for:', query);
        const filtered = dummyData.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div>
            <h1>Search App</h1>
            <SearchBar onSearch={handleSearch} />
            <ul>
                {filteredData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
