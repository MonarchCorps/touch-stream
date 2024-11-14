import Features from '../components/Features/Features.jsx'
import Header from '../components/Header/Header'
import BodyAnimation from '../components/Animations/BodyAnimation.jsx'
import Hero from '../components/Hero/Hero'
import Empower from '../components/Empower/Empower.jsx'
import Live from '../components/Live/Live.jsx'

function Home() {
    return (
        <>
            <Header />
            <main className='pt-24' id='smooth-wrapper'>
                <BodyAnimation />
                <Hero />
                <Features />
                <Empower />
                <Live />
            </main>
        </>
    )
}

export default Home;