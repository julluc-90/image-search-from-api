import './App.css'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api'

function App() {
  // array of image objects
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    console.log('Do a search with', term)
    const result = await searchImages(term)
    setImages(result)
  }

  return (
    <div className="main-pics-app">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}
export default App
