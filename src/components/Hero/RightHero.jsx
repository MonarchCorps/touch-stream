import { useRef } from 'react';
import image1 from '../../assets/images/image1.jpeg';
import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import image4 from '../../assets/images/image4.jpg';
import { useAppearFromEdge, useRotateFrom0 } from '../Animations/GsapAnimations';

function RightHero() {

    const useRotateFrom0Ref = useRef({});
    const useAppearEdgeRef = useRef({});

    const positions = [{ x: -10, y: -35 }, { x: 10, y: -35 }, { x: -10, y: 35 }, { x: 10, y: 35 }]

    useAppearFromEdge(useAppearEdgeRef, positions);
    useRotateFrom0(useRotateFrom0Ref);

    return (
        <div className='flex gap-7 relative'>
            <svg width="150" height="200" xmlns="http://www.w3.org/2000/svg" className='absolute right-96 top-80'>
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
            <div className='grid grid-flow-row gap-5'>
                <div>
                    <img src={image3} alt="" className='w-72 object-cover rounded-t-[25px] rounded-bl-[25px] h-full' ref={(el) => (useAppearEdgeRef.current.image3 = el)} />
                </div>
                <div>
                    <img src={image2} alt="" className='float-right rounded-tl-[19px] rounded-b-[19px]' ref={(el) => (useAppearEdgeRef.current.image2 = el)} />
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='h-[80px] w-[90px] bg-[#c6b8ff] rounded-t-[14px] rounded-br-[14px]' ref={(el) => (useRotateFrom0Ref.current.heroBox = el)}></div>
                <div>
                    <img src={image1} alt="" className='rounded-r-[19px] h-[190px] object-cover w-full' ref={(el) => (useAppearEdgeRef.current.image1 = el)} />
                </div>
                <div className='flex items-start'>
                    <img src={image4} alt="" className='w-[120px] rounded-[19px]' ref={(el) => (useAppearEdgeRef.current.image4 = el)} />
                </div>
            </div>
        </div>
    )
}

export default RightHero