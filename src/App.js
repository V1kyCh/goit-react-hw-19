import { useEffect, useState,useCallback } from 'react';
import './App.css';

import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Modal } from './components/Modal/Modal';
import { Button } from './components/Button/Button';

export const App = () => {

  const [imgName, setImgName] = useState('')
  const [images, setImages] = useState([])
  const [perPage,setPerPage]=useState(12)

  const searchedImg = useCallback((name) => {
    setImgName(name)
  },[])

  const handleLoadMore = useCallback(()=>{
    setPerPage(perPage + 12)
  },[perPage])

  useEffect(() => {
    if (imgName.trim() === '') return;

    fetch(`https://pixabay.com/api/?q=${encodeURIComponent(imgName)}&page=1&key=48306443-446e4eebc6203163013c3f315&image_type=photo&orientation=horizontal&per_page=${perPage}`)
      .then(data => data.json())
      .then(data => {
        setImages(data.hits);
      })
      .catch((error) => {
        console.error("Error fetching gifs:", error);
      });
  }, [imgName,perPage]);

  return (
    <div className="App">
      <Searchbar searchImg={searchedImg} />
      <ImageGallery images={images} />
      {images.length > 0 && <Button loadMore={handleLoadMore}/>}
      <Modal />
    </div>
  );
}

export default App;