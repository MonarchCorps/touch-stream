/* eslint-disable react/no-unescaped-entities */
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap/';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { useAppearX, useAppearY, useAppearScaleFrom0 } from '../Animations/GsapAnimations';

gsap.registerPlugin(ScrollTrigger);

function LeftHero() {

    const useScaleYRef = useRef({});
    const useScaleXRef = useRef({});
    const scaleFrom0Ref = useRef({});

    const y = [{ y: -70 }, { y: 70 }];
    const x = [{ x: -100 }, { x: -100 }, { x: -100 }]

    useAppearY(useScaleYRef, y);
    useAppearX(useScaleXRef, x);
    useAppearScaleFrom0(scaleFrom0Ref);
    return (
        <div className='py-4 px-2 mr-3 relative'>
            <div className='absolute left-20 top-[30rem] -z-10' ref={(el) => useScaleXRef.current.svg = el}>
                <svg width="150" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                </svg>
                <div className='w-[100px] h-[100px] absolute top-[3.2rem] left-7 bg-[#a997f1] rounded-tl-full rotate-90 opacity-[0.6]'></div>
            </div>
            <h3 className='text-[13px] text-[#7444a4] font-500 tracking-wider mb-3' ref={(el) => (scaleFrom0Ref.current.builtParagraph = el)}>BUILT FOR OPERATIONS BY OPERATIONS EXPERTS</h3>
            <h1 className='text-[66px] mt-9 font-600 leading-[1.22] tracking-wide mb-3 .header' ref={(el) => (useScaleYRef.current.title = el)}>
                <span className='text-[#2e2b2b]'>Virtual NOC OTT's</span>
                <br />
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#5864ff] to-[#1f40aa]'>Operations Hub</span>
            </h1>
            <p className='text-sm text-[#373636] font-poppins mb-2 tracking-[0.24px] font-400' ref={(el) => (useScaleXRef.current.findParagraph = el)}>Find OTT delivery issues before your viewers are impacted</p>
            <button className='bg-gradient-to-r from-blue-500 to-sky-500 h-12 w-48 p-3 rounded-[10px] mt-4 text-center shadow-lg text-slate-50' ref={(el) => (useScaleYRef.current.demoButton = el)} >
                <span className='flex items-center ml-4'>
                    Request Demo
                    <span className='ml-2'><FaArrowRight /></span>
                </span>
            </button>
        </div>
    )
}

export default LeftHero;