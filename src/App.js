import React, { useState } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import ImageList from './components/imageList';
import logo from './logo.webp';

const App = () => {
    const [images, setImages] = useState([]);
    const Apikey = process.env.REACT_APP_PIXABAY_APIKEY;
    const onSearchSubmit = async(term) => {
        try{
            const params = {
                key: Apikey,
                q: term,
            };
            const response = await axios.get("https://pixabay.com/api/", {params});
            console.log(response);
            setImages(response.data.hits);
            if(response.data.total===0){
                window.alert("お探しの画像は存在しません")
            }
        }catch{
            window.alert("写真の取得に失敗しました")
        }
    };

    return (
        <div className='ui container' style={{ marginTop: '20px' }}>
            <img src={logo} alt='pixabay-logo' className='pixabay-logo' />
            <SearchBar onSubmit={onSearchSubmit} />  
            <ImageList images={images} />
        </div>
    );
};

export default App;
