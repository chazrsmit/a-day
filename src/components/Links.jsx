import './links.css'
import { useEffect } from 'react'

export default function Links({ spawnImage }) {

    // only the first letter will be in italic when hovered
    // faire une boucle pour chaque mot
    useEffect(() => {
        document.querySelectorAll('p').forEach(p => {
            p.innerHTML = `<span class="first-letter">${p.textContent[0]}</span>${p.textContent.slice(1)}`
        })
    }, [])

        useEffect(() => {
        document.querySelectorAll('h6').forEach(h => {
            h.innerHTML = `<span class="first-letter">${h.textContent[0]}</span>${h.textContent.slice(1)}`
        })
    }, [])

    // vérifier si on est sur mobile/tablette ou pas
    const isMobile = innerWidth < 1024

    return(
    <>
    <h6
        onMouseEnter={() => !isMobile && spawnImage('As')}
        onClick={() => isMobile && spawnImage('As')}
    >
        As
    </h6>

    {/* 1 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('a pair of')}
        onClick={() => isMobile && spawnImage('a pair of')}
    >
        a pair of
    </p>

    {/* 2 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('eyes set')}
        onClick={() => isMobile && spawnImage('eyes set')}
    >
        eyes set
    </p>

    {/* 3 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('their disillusioned')}
        onClick={() => isMobile && spawnImage('their disillusioned')}
    >
        their disillusioned
    </p>

    {/* 4 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('gaze')}
        onClick={() => isMobile && spawnImage('gaze')}
    >
        gaze
    </p>

    {/* 5 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('onto most')}
        onClick={() => isMobile && spawnImage('onto most')}
    >
        onto most
    </p>

    {/* 6 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('ordinary')}
        onClick={() => isMobile && spawnImage('ordinary')}
    >
        ordinary
    </p>

    {/* 7 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('and monotonous')}
        onClick={() => isMobile && spawnImage('and monotonous')}
    >
        and monotonous
    </p>

    {/* 8 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('sights')}
        onClick={() => isMobile && spawnImage('sights')}
    >
        sights
    </p>

    {/* 9 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('a morsel of')}
        onClick={() => isMobile && spawnImage('a morsel of')}
    >
        a morsel of
    </p>

    {/* 10 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('hope')}
        onClick={() => isMobile && spawnImage('hope')}
    >
        hope
    </p>

    {/* 11 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('somehow')}
        onClick={() => isMobile && spawnImage('somehow')}
    >
        somehow
    </p>

    {/* 12 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('wrenched itself')}
        onClick={() => isMobile && spawnImage('wrenched itself')}
    >
        wrenched itself
    </p>

    {/* 13 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('free from')}
        onClick={() => isMobile && spawnImage('free from')}
    >
        free from
    </p>

    {/* 14 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('the growing')}
        onClick={() => isMobile && spawnImage('the growing')}
    >
        the growing
    </p>

    {/* 15 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('fear')}
        onClick={() => isMobile && spawnImage('fear')}
    >
        fear
    </p>

    {/* 16 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('of stagnant')}
        onClick={() => isMobile && spawnImage('of stagnant')}
    >
        of stagnant
    </p>

    {/* 17 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('emptiness')}
        onClick={() => isMobile && spawnImage('emptiness')}
    >
        emptiness
    </p>

    {/* 18 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('amidst the')}
        onClick={() => isMobile && spawnImage('amidst the')}
    >
        amidst the
    </p>

    {/* 19 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('monochromatic')}
        onClick={() => isMobile && spawnImage('monochromatic')}
    >
        monochromatic
    </p>

    {/* 20 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('sea of')}
        onClick={() => isMobile && spawnImage('sea of')}
    >
        sea of
    </p>

    {/* 21 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('uncertain')}
        onClick={() => isMobile && spawnImage('uncertain')}
    >
        uncertain
    </p>

    {/* 22 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('figures')}
        onClick={() => isMobile && spawnImage('figures')}
    >
        figures
    </p>

    {/* 23 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('heads')}
        onClick={() => isMobile && spawnImage('heads')}
    >
        heads
    </p>

    {/* 24 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('angled-downward in')}
        onClick={() => isMobile && spawnImage('angled-downward in')}
    >
        angled-downward in
    </p>

    {/* 25 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('drizzle-imposed')}
        onClick={() => isMobile && spawnImage('drizzle-imposed')}
    >
        drizzle-imposed
    </p>

    {/* 26 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('choreography and')}
        onClick={() => isMobile && spawnImage('choreography and')}
    >
        choreography and
    </p>

    {/* 27 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('yearnings for')}
        onClick={() => isMobile && spawnImage('yearnings for')}
    >
        yearnings for
    </p>

    {/* 28 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('a brief crack')}
        onClick={() => isMobile && spawnImage('a brief crack')}
    >
        a brief crack
    </p>

    {/* 29 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('in the fortress')}
        onClick={() => isMobile && spawnImage('in the fortress')}
    >
        in the fortress
    </p>

    {/* 30 */}
    <p
        onMouseEnter={() => !isMobile && spawnImage('of clouds')}
        onClick={() => isMobile && spawnImage('of clouds')}
    >
        of clouds
    </p>
    </>
    )
}