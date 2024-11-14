import { gsap } from 'gsap/';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all'; import Nav from './Nav';
import logoImage from '../../assets/images/download.png';
import { useAppearY } from '../Animations/GsapAnimations';

gsap.registerPlugin(ScrollTrigger);

function Header() {
    const useScaleYRef = useRef({});

    const y = [{ y: 30 }, { y: 30 }, { y: 30 }, { y: 30 }, { y: 30 }, { y: 30 }, { y: 30 }, { y: 30 }]
    const delays = [0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9]

    useAppearY(useScaleYRef, y, delays);

    return (
        <header className='w-full fixed top-0 left-0 right-0 bg-white z-[500]'>
            <div className='header--container flex justify-between max-w-[97%] mx-auto my-0 px-4 py-3 items-center'>
                <div className='text-sm' ref={(el) => (useScaleYRef.current.logo = el)}>
                    <img src={logoImage} alt="logo image" className='w-[140px] h-[30px] object-cover' />
                </div>
                <Nav useScaleYRef={useScaleYRef} />
                <div>
                    <button className='border-2 border-solid border-[#4361a4] px-3 py-2 w-36 rounded-md' ref={(el) => (useScaleYRef.current.demo = el)}>
                        <span className='text-[#4361a4] font-500 text-sm'>Request Demo</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header