import { useRef } from 'react';
import image6 from '../../assets/images/image6.jpeg'
import image7 from '../../assets/images/image7.jpeg'
import image8 from '../../assets/images/image8.jpeg'
import { useAppearFromEdge, useRotateFrom0 } from '../Animations/GsapAnimations';

function RightEmpower() {

    const useRotateFrom0Ref = useRef({});
    const useAppearEdgeRef = useRef({});

    const positions = [{ x: 10, y: -35 }, { x: -10, y: 35 }, { x: 10, y: 35 }];

    useAppearFromEdge(useAppearEdgeRef, positions);
    useRotateFrom0(useRotateFrom0Ref);

    return (
        <div className='flex gap-7 w-[57%]'>
            <div>
                <div className='mb-6'>
                    <img src={image6} alt="" className='w-[25rem] object-cover rounded-t-md rounded-bl-md' ref={(el) => (useAppearEdgeRef.current.image6 = el)} />
                </div>
                <div>
                    <img src={image8} alt="" className='w-[120px] rounded-[19px] float-right' ref={(el) => (useAppearEdgeRef.current.image7 = el)} />
                </div>
            </div>
            <div>
                <div className='w-[60px] h-[60px] bg-[#c6b8ff] rounded-tl-full rotate-90 opacity-[0.7] mb-10' ref={(el) => (useRotateFrom0Ref.current.heroBox = el)}></div>
                <div>
                    <img src={image7} alt="" className=' h-[24rem] w-[13.3rem]' ref={(el) => (useAppearEdgeRef.current.image8 = el)} />
                </div>
            </div>
        </div>
    )
}

export default RightEmpower