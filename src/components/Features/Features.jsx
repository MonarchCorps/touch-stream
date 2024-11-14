import { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useAppearScaleFrom0, useAppearX, useAppearY } from '../Animations/GsapAnimations';
// import useCssAnimations from '../Animations/CssAnimations';

function Features() {

    const useScaleYRef = useRef({});
    const useScaleXRef = useRef({});
    const useScaleFrom0Ref = useRef({});

    const y = [{ y: 35 }, { y: 20 }];
    const x = [{ x: 100 }];
    const delays = [0.43]

    useAppearY(useScaleYRef, y, delays);
    useAppearX(useScaleXRef, x)
    useAppearScaleFrom0(useScaleFrom0Ref);

    const contents = [
        {
            id: 1,
            src: 'https://lottie.host/embed/eb42a09b-fce2-41ff-ac60-02295ed2d062/ufrv9GieMD.json',
            heading: 'Transparent',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repudiandae sequi accusamus ad nihil rem exercitationem eligendi placeat temporibus mollitia',
            reference: useScaleXRef
        },
        {
            id: 2,
            src: 'https://lottie.host/embed/2df30db6-5f03-453e-816a-3e1bf061c0cd/5nRTOLUDrh.json',
            heading: 'Quick Fundraiser',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repudiandae sequi accusamus ad nihil rem exercitationem eligendi placeat temporibus mollitia',
            reference: useAppearY
        },
        {
            id: 3,
            src: 'https://lottie.host/embed/377e246c-3703-421a-ade0-c3d67a26104c/2tio3Ncac0.json',
            heading: 'Real Time',
            paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repudiandae sequi accusamus ad nihil rem exercitationem eligendi placeat temporibus mollitia',
            reference: useScaleXRef
        },
    ];

    return (
        <section className='max-w-[94%] mx-auto my-20 py-24 relative'>
            <div className='flex flex-col max-w-[92%] mx-auto py-3 items-center'>
                <div className='absolute right-40 top-[6rem] -z-10' ref={(el) => useScaleXRef.current.svg = el}>
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
                    <div className='w-[60px] h-[60px] absolute top-[-2rem] right-0 bg-[#c6b8ff] rounded-tl-full rotate-90 opacity-[0.7]'></div>
                </div>
                <h3 className='text-[13px] text-[#7444a4] font-500 tracking-wider mb-1 animate' ref={(el) => useScaleYRef.current.features = el}>OUR FEATURES</h3>
                <h1 className='text-[40px] mt-2 font-600 tracking-wide mb-3 text-[#2e2b2b] cssanimation leSnake sequence'
                // ref={(el) => (useSnakeRef.current[el] = { element: el, className: 'cssanimation leSnake sequence' })}
                >
                    We believe we can save more life with you
                </h1>
                <div className='flex flex-row gap-5 mt-7'>
                    {contents.map((content) => (
                        <figure key={content.id} className='drop-shadow-lg shadow-slate-600 bg-slate-50 p-5 text-center items-center rounded-md' ref={(el) => (useScaleFrom0Ref.current[`figure${content.id}`] = el)}>
                            <div /*ref={(el) => (content.reference[`iframe${content.id}`] = el)}*/>
                                <iframe src={content.src} width='100%' className='text-center'></iframe>
                            </div>
                            <h1 className='text-xl font-600 tracking-wide mt-4 mb-3 text-[#2e2b2b]'>{content.heading}</h1>
                            <p className='leading-[1.52] tracking-[0.2px] text-[15px] text-[#4f4f4f] font-400 font-poppins'>
                                <span className='w-[9%]'>
                                    {content.paragraph}
                                </span>
                            </p>
                        </figure>
                    ))}
                </div>
                <button className='bg-gradient-to-r to-blue-500 from-sky-500 h-12 w-40 p-3 rounded-[10px] mt-20 text-center shadow-lg' ref={(el) => useScaleYRef.current.button = el}>
                    <span className='flex items-center ml-4 text-[#d8d5d5]'>
                        Fill the form
                        <span className='ml-2'><FaArrowRight /></span>
                    </span>
                </button>
            </div>
        </section>
    );
}

export default Features;
