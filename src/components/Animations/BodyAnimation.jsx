function BodyAnimation() {

    const animationsProperties = [
        {
            id: 2,
            name: 'animate-animateOne',
            top: '160vh',
            left: '30rem'
        },
        {
            id: 1,
            name: 'animate-animateTwo',
            top: '70vh',
            left: '10rem'
        },
        {
            id: 3,
            name: 'animate-animateThree',
            top: '200vh',
            left: '45rem'
        },
        {
            id: 4,
            name: 'animate-animateFour',
            top: '235vh',
            left: '50rem'
        },
        {
            id: 5,
            name: 'animate-animateFive',
            top: '197vh',
            left: '0'
        },
        {
            id: 6,
            name: 'animate-animateFive',
            top: '98vh',
            left: '0'
        }
    ]

    return (
        <div className='animation-box'>
            {
                animationsProperties.map((animation) => {
                    return (
                        <div key={animation.id} className={`${animation.name} absolute bg-[#6b6ecb75] w-[50px] h-[50px] -z-10 opacity-[0.3] inline-block`} style={{ top: animation.top, left: animation.left }}></div>
                    )
                })
            }
        </div>
    )
}

export default BodyAnimation