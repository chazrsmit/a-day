import { useState, useEffect } from 'react'
import './App.css'
import Links from './components/Links'
import ImageLayer from './components/ImageLayer'

function App() {

  // on est sur vite et on a deploy (vu sur chatGpt):
  const IMG = `${import.meta.env.BASE_URL}images/`

  // mapping words with images
  const wordMap = {
    'As': `${IMG}042644850004.jpg`,
    'a pair of': `${IMG}042644850005.jpg`,
    'eyes set': `${IMG}042644850008.jpg`,
    'their disillusioned': `${IMG}042644850011.jpg`,
    'gaze': `${IMG}042644850012.jpg`,
    'onto most': `${IMG}042644850013.jpg`,
    'ordinary': `${IMG}Charlotte0030.jpg`,
    'and monotonous': `${IMG}042644850016.jpg`,
    'sights': `${IMG}042644850019.jpg`,
    'a morsel of': `${IMG}042644850022.jpg`,
    'hope': `${IMG}042644850023.jpg`,
    'somehow': `${IMG}042644850024.jpg`,
    'wrenched itself': `${IMG}042644850025.jpg`,
    'free from': `${IMG}042644850026.jpg`,
    'the growing': `${IMG}042644850027.jpg`,
    'fear': `${IMG}042644850031.jpg`,
    'of stagnant': `${IMG}Charlotte0002.jpg`,
    'emptiness': `${IMG}Charlotte0004.jpg`,
    'amidst the': `${IMG}Charlotte0005.jpg`,
    'monochromatic': `${IMG}Charlotte0007.jpg`,
    'sea of': `${IMG}Charlotte0008.jpg`,
    'uncertain': `${IMG}Charlotte0009.jpg`,
    'figures': `${IMG}Charlotte0013.jpg`,
    'heads': `${IMG}Charlotte0019.jpg`,
    'angled-downward in': `${IMG}Charlotte0025.jpg`,
    'drizzle-imposed': `${IMG}Charlotte0026.jpg`,
    'choreography and': `${IMG}Charlotte0031.jpg`,
    'yearnings for': `${IMG}Charlotte0032.jpg`,
    'a brief crack': `${IMG}Charlotte0035.jpg`,
    'in the fortress': `${IMG}Charlotte0041.jpg`,
    'of clouds': `${IMG}042644850007.jpg`
  }   

  // preload images
  useEffect(() => {
    Object.values(wordMap).forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [])

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