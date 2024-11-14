import { useRef } from 'react'
import { useAppearY, useWidthIncrease } from '../Animations/GsapAnimations';

function LeftEmpower() {

    const useWidthIncreaseRef = useRef({});
    const useScaleYRef = useRef({});

    const width = ['4rem'];
    const y = [{ y: 34 }, { y: 37 }]
    const delays = [0.4, 0.43]

    useWidthIncrease(useWidthIncreaseRef, width);
    useAppearY(useScaleYRef, y, delays);

    return (
        <div className='py-4 px-2 mr-3 w-[37%] self-center'>
            <div className="w-16 h-1 bg-blue-400 rounded-full" ref={(el) => useWidthIncreaseRef.current.empowerLine = el}></div>
            <h1 ref={(el) => useScaleYRef.current.builtTitle = el} className='text-[55px] mt-5 font-900 leading-[1] tracking-wide mb-3'>
                <span className='text-[#2e2b2b]' >Built to empower</span>
                <br />
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#5864ff] to-[#1f40aa]'>everyone</span>
            </h1>
            <p className='text-sm text-[#373636] font-poppins mb-2 tracking-[0.24px] font-400' ref={(el) => useScaleYRef.current.provisionParagraph = el}>We provide small industries, organizations and institutes of high-tech industries with modern components</p>
        </div>
    )
}

export default LeftEmpower