import './links.css'
import { useEffect } from 'react'

export default function Links() {

    // only the first letter will be in italic when hovered
    // faire un boucle pour chaque mot

    useEffect(() => {
        document.querySelectorAll('p').forEach(p => {
            p.innerHTML = `<span class="first-letter">${p.textContent[0]}</span>${p.textContent.slice(1)}`
        })
    }, [])


    return(
        <>
        {/* 1 */}
        <p>a pair of<br/>As</p>
        {/* 2 */}
        <p>eyes set</p>
        {/* 3 */}
        <p>their disillusioned</p>
        {/* 4 */}
        <p>gaze</p>
        {/* 5 */}
        <p>onto most</p>
        {/* 6 */}
        <p>ordinary</p>
        {/* 7 */}
        <p>and monotonous</p>
        {/* 8 */}
        <p>sights</p>
        {/* 9 */}
        <p>a morsel of</p>
        {/* 10 */}
        <p>hope</p>
        {/* 11 */}
        <p>somehow</p>
        {/* 12 */}
        <p>wrenched itself</p>
        {/* 13 */}
        <p>free from</p>
        {/* 14 */}
        <p>the growing</p>
        {/* 15 */}
        <p>fear</p>
        {/* 16 */}
        <p>of stagnant</p>
        {/* 17 */}
        <p>emptiness</p>
        {/* 18 */}
        <p>amidst the</p>
        {/* 19 */}
        <p>monochromatic</p>
        {/* 20 */}
        <p>sea of</p>
        {/* 21 */}
        <p>uncertain</p>
        {/* 22 */}
        <p>figures</p>
        {/* 23 */}
        <p>heads</p>
        {/* 24 */}
        <p>angled-downward in</p>
        {/* 25 */}
        <p>drizzle-imposed</p>
        {/* 26 */}
        <p>choreography and</p>
        {/* 27 */}
        <p>yearnings for</p>
        {/* 28 */}
        <p>a brief crack</p>
        {/* 29 */}
        <p>in the fortress</p>
        {/* 30 */}
        <p>of clouds</p>
        </>
    )
}