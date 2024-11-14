import LeftHero from './LeftHero';
import RightHero from './RightHero';

function Hero() {
    return (
        <section className='max-w-[94%] mx-auto mt-[-2rem] mb-32 '>
            <div className='grid grid-flow-col gap-6 justify-between max-w-[92%] mx-auto py-3 h-screen items-center'>
                <LeftHero />
                <RightHero />
            </div>
        </section>
    );
}

export default Hero;