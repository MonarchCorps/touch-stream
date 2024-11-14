import LeftEmpower from './LeftEmpower'
import RightEmpower from './RightEmpower'

function Empower() {
    return (
        <section className='max-w-[94%] mx-auto mt-16 mb-32 '>
            <div className='flex gap-6 justify-between max-w-[92%] mx-auto py-3'>
                <LeftEmpower />
                <RightEmpower />
            </div>
        </section>
    )
}

export default Empower