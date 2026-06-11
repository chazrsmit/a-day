
import './imagelayer.css'

export default function ImageLayer({ images }) {

    return(

        <>

            {images.map(img => 
                (<img
                key={img.id}
                src={img.src}
                style={{
                    position: 'fixed',
                    left: img.x,
                    top: img.y,
                    pointerEvents: 'none',
                    }}
                />)
            )}

        </>
    )
}