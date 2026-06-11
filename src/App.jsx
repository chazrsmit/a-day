import { useState } from 'react'
import './App.css'
import Links from './components/Links'
import ImageLayer from './components/ImageLayer'

function App() {

  // mapping words with images
  const wordMap = {
    'As': '/images/042644850004.jpg',
    'a pair of': '/images/042644850005.jpg',
    'eyes set': '/images/042644850008.jpg',
    'their disillusioned': '/images/042644850011.jpg',
    'gaze': '/images/042644850012.jpg',
    'onto most': '/images/042644850013.jpg',
    'ordinary': '/images/Charlotte0030.jpg',
    'and monotonous': '/images/042644850016.jpg',
    'sights': '/images/042644850019.jpg',
    'a morsel of': '/images/042644850022.jpg',
    'hope': '/images/042644850023.jpg',
    'somehow': '/images/042644850024.jpg',
    'wrenched itself': '/images/042644850025.jpg',
    'free from': '/images/042644850026.jpg',
    'the growing': '/images/042644850027.jpg',
    'fear': '/images/042644850031.jpg',
    'of stagnant': '/images/Charlotte0002.jpg',
    'emptiness': '/images/Charlotte0004.jpg',
    'amidst the': '/images/Charlotte0005.jpg',
    'monochromatic': '/images/Charlotte0007.jpg',
    'sea of': '/images/Charlotte0008.jpg',
    'uncertain': '/images/Charlotte0009.jpg',
    'figures': '/images/Charlotte0013.jpg',
    'heads': '/images/Charlotte0019.jpg',
    'angled-downward in': '/images/Charlotte0025.jpg',
    'drizzle-imposed': '/images/Charlotte0026.jpg',
    'choreography and': '/images/Charlotte0031.jpg',
    'yearnings for': '/images/Charlotte0032.jpg',
    'a brief crack': '/images/Charlotte0035.jpg',
    'in the fortress': '/images/Charlotte0041.jpg',
    'of clouds': '/images/042644850007.jpg'
  }

  const [images, setImages] = useState([])

  function spawnImage(word) {
    const src = wordMap[word]
    if (!src) return
    
    const isMobile = window.innerWidth < 768
    const padding = 150
    const halfWidth = 150
    const halfHeight = 180

    const x = Math.random() * (window.innerWidth - padding - halfWidth)
    const y = isMobile
      ? Math.random() * (window.innerHeight * 0.5 - halfWidth)
      : Math.random() * (window.innerHeight - padding - halfHeight)

    const newImage = {
      id: crypto.randomUUID(),
      src,
      x,
      y,
      word
    }

    setImages(prev => {
      if (isMobile) {
        return [...prev, newImage] // stacking
      } else {
        return [newImage] // no stacking
      }
    })
  }

  return (
    <>
      <Links spawnImage={spawnImage} />
      <ImageLayer images={images} />
    </>
  )
}

export default App