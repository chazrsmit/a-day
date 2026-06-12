import { useState, useEffect } from 'react'
import './App.css'
import Links from './components/Links'
import ImageLayer from './components/ImageLayer'

function App() {

  // on est sur vite et on a deploy (vu sur chatGpt):
  const IMG = `${import.meta.env.BASE_URL}images/`

  // mapping words with images
  const wordMap = {
    'As': `${IMG}042644850004.webp`,
    'a pair of': `${IMG}042644850005.webp`,
    'eyes set': `${IMG}042644850008.webp`,
    'their disillusioned': `${IMG}042644850011.webp`,
    'gaze': `${IMG}042644850012.webp`,
    'onto most': `${IMG}042644850013.webp`,
    'ordinary': `${IMG}Charlotte0030.webp`,
    'and monotonous': `${IMG}042644850016.webp`,
    'sights': `${IMG}042644850019.webp`,
    'a morsel of': `${IMG}042644850022.webp`,
    'hope': `${IMG}042644850023.webp`,
    'somehow': `${IMG}042644850024.webp`,
    'wrenched itself': `${IMG}042644850025.webp`,
    'free from': `${IMG}042644850026.webp`,
    'the growing': `${IMG}042644850027.webp`,
    'fear': `${IMG}042644850031.webp`,
    'of stagnant': `${IMG}Charlotte0002.webp`,
    'emptiness': `${IMG}Charlotte0004.webp`,
    'amidst the': `${IMG}Charlotte0005.webp`,
    'monochromatic': `${IMG}Charlotte0007.webp`,
    'sea of': `${IMG}Charlotte0008.webp`,
    'uncertain': `${IMG}Charlotte0009.webp`,
    'figures': `${IMG}Charlotte0013.webp`,
    'heads': `${IMG}Charlotte0019.webp`,
    'angled-downward in': `${IMG}Charlotte0025.webp`,
    'drizzle-imposed': `${IMG}Charlotte0026.webp`,
    'choreography and': `${IMG}Charlotte0031.webp`,
    'yearnings for': `${IMG}Charlotte0032.webp`,
    'a brief crack': `${IMG}Charlotte0035.webp`,
    'in the fortress': `${IMG}Charlotte0041.webp`,
    'of clouds': `${IMG}042644850007.webp`
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
      ? Math.random() * (window.innerHeight - padding - halfWidth)
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