import { useState } from 'react'
import './App.css'
import Links from './components/Links'
import ImageLayer from './components/ImageLayer'

function App() {

  // on est sur vite et on a deploy (vu sur chatGpt):
  // ${import.meta.env.BASE_URL est une variable injectée par vite au moment du build, elle contient le chemin de base de l'app.
  // on l'ajoute pour que les images ne cassent pas lorsqu'on deploy
  const IMG = `${import.meta.env.BASE_URL}images/`

  // mapping words with images / dictionnaire de paires associant mots et images
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

  // C'est un tableau qui contient les images actuellement affichées à l'écran.
  // Chaque élément contenu est un objet avec id, src, x, y, word. Au départ il est vide et aucune image n'est affichée.
  // Les éléments sont envoyés dans le component ImageLayer qui affichera l'image
  const [images, setImages] = useState([])

  // Lorsqu'on clique sur un mot dans l'app, une fonction est déclenchée.
  // Elle prend donc en paramètre le mot cliqué
  function spawnImage(word) {
    // on cherche l'image associée au mot cliqué, en regardant dans le dictionnaire wordMap
    const src = wordMap[word]
    if (!src) return
    
    const isMobile = window.innerWidth < 768
    const padding = 150
    const halfWidth = 150
    const halfHeight = 180

    // on calcule une position aléatoire, en retirant le padding et les demi-dimensions dans rester dans le viewport
    const x = Math.random() * (window.innerWidth - padding - halfWidth)
    const y = isMobile
      ? Math.random() * (window.innerHeight - padding - halfWidth)
      : Math.random() * (window.innerHeight - padding - halfHeight)

    // on crée l'objet image, élément qui sera ensuite ajouté au tableau 'Images' et envoyé dans le component ImageLayer pour être displayed
    const newImage = {
      // cette fonction built-in permet de générer un identifiant unique, qu'on utilisera lorsqu'on mapera les images
      id: crypto.randomUUID(),
      src,
      x,
      y,
      word
    }

    // on envoit l'image dans le tableau 'Images'.
    // Si l'on est sur mobile, on fait une copie du tableau actuel avec le spread operator, et on y ajoute la nouvelle image
    // > ça veut donc dire que les images précédentes ne sont pas effacées, il y a un effet de stacking
    // Sur desktop, on veut juste une image à la fois dans le tableau 'Images'
    // attention à ne pas oublier le return
    setImages(prev => {
      if (isMobile) {
        return [...prev, newImage]
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