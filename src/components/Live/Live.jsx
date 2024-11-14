import { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useAppearFromEdge, useAppearY } from '../Animations/GsapAnimations';

function Live() {

    const useFromEdgeRef = useRef({});
    const useScaleYRef = useRef({});

    const positions = [{ x: -30, y: 10 }];
    const y = [{ y: 30 }, { y: 32 }, { y: 35 }];

    useAppearFromEdge(useFromEdgeRef, positions);
    useAppearY(useScaleYRef, y);

    return (
        <section className='mt-64 bg-[#161e2c] w-full py-16 text-center relative'>
            <svg className='absolute top-[-200px] -left-52 h-auto' width="1440" height="449" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 0h1454v449H0z" /></defs><g transform="translate(-14)" fill="none" fillRule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a" /></mask><path d="M14 413.954c90.836-5.359 176.206-50.375 256.111-135.046C389.968 151.9 364.01 105.164 563.005 148.686 762 192.207 745.05 163.699 873 63.13c127.95-100.57 211-77.554 289 44.667 78 122.222 151 162.895 284 207.778 88.667 29.921 92.03 848.285 10.091 2455.09H14V413.956z" fill="#181F2B" mask="url(#b)" /></g></svg>
            <div className='gap-6 justify-between max-w-[56%] mx-auto py-3'>
                <svg width="150" height="200" xmlns="http://www.w3.org/2000/svg" className='absolute left-52 top-32' ref={(el) => useFromEdgeRef.current.svg = el}>
                    <circle cx="5" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="145" cy="5" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="145" cy="20" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="145" cy="35" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="145" cy="50" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="145" cy="65" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="145" cy="80" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="145" cy="95" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="145" cy="110" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="125" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="125" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="125" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="125" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="125" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="125" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="125" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="145" cy="125" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                    <circle cx="5" cy="140" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="25" cy="140" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="45" cy="140" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="65" cy="140" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="85" cy="140" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="105" cy="140" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="125" cy="140" r="3" fill="#ffc0c0" fillOpacity="0.2" />
                    <circle cx="145" cy="140" r="3" fill="#ffc0c0" fillOpacity="0.2" />

                </svg>
                <h1 className='text-[55px] mt-5 font-900 leading-[1] tracking-wide mb-6 container infinite text-[#dcdada]' ref={(el) => useScaleYRef.current.readyText = el}>
                    Ready to go live
                </h1>
                <p className='text-sm font-poppins mb-2 tracking-[0.24px] font-400 text-[#dcdada]' ref={(el) => useScaleYRef.current.productionText = el}>Use our production environment to get unlimited access to every feature on our platform. Work with a dedicated success manager to build banking, launch and start generating revenue</p>
                <button className='bg-gradient-to-r to-blue-500 from-sky-500 h-12 w-40 p-3 rounded-[10px] mt-9 text-center shadow-lg' ref={(el) => useScaleYRef.current.button = el}>
                    <span className='flex items-center ml-4 text-[#d8d5d5]'>
                        Get Started
                        <span className='ml-2'><FaArrowRight /></span>
                    </span>
                </button>
            </div>
        </section>
    )
}

export default Live