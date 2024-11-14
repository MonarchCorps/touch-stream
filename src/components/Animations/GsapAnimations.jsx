import gsap from 'gsap'
import { useEffect } from 'react'

gsap.registerPlugin(window.ScrollSmoother);

function useAppearY(elementsRef, y = [{ y: 0 }], delays = [0.52]) {

    useEffect(() => {

        const elementsMap = new Map();

        const handleIntersection = (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const index = Object.values(elementsRef.current).indexOf(entry.target)
                    if (index !== -1) {
                        gsap.fromTo(entry.target, {
                            opacity: 0,
                            y: y[i]?.y || 0,
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 0.82,
                            delay: delays[i] || 0.52
                        });
                    }
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.3
        });

        Object.values(elementsRef.current).forEach((element, i) => {
            if (element) {
                elementsMap.set(element, observer);
                gsap.set(element, {
                    opacity: 0,
                    y: y[i]?.y || 0,
                    delay: delays[i] || 0.52
                });  // Set initial styles for each element based on index
            }
        });

        const cleanUp = observerFunction(elementsRef, observer, elementsMap)

        return cleanUp;

    }, [elementsRef, y, delays]);

}

function useAppearX(elementsRef, x = [{ x: 0 }]) {
    useEffect(() => {
        const elementsMap = new Map()

        const handleIntersection = (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const index = Object.values(elementsRef.current).indexOf(entry.target)
                    if (index !== -1) {
                        gsap.fromTo(entry.target, {
                            opacity: 0,
                            x: x[i].x,
                        }, {
                            opacity: 0.82,
                            x: 0,
                            duration: 0.9,
                            delay: 0.52
                        });
                    }
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.3
        });

        Object.values(elementsRef.current).forEach((element, i) => {
            if (element) {
                elementsMap.set(element, observer);
                gsap.set(element, {
                    opacity: 0,
                    x: x[i].x
                })
            }
        })

        const cleanUp = observerFunction(elementsRef, observer, elementsMap)

        return cleanUp;

    }, [elementsRef, x]);
}

function useAppearScaleFrom0(elementsRef) {
    useEffect(() => {

        const elementsMap = new Map()

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Object.values(elementsRef.current).indexOf(entry.target)
                    if (index !== -1) {
                        gsap.fromTo(entry.target, {
                            opacity: 0,
                            scale: .1,
                        }, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.82,
                            delay: 0.2
                        })
                    }
                    observer.unobserve(entry.target)
                }
            });
        }

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.3
        });

        Object.values(elementsRef.current).forEach(element => {
            if (element) {
                elementsMap.set(element, observer);
                gsap.set(element, {
                    opacity: 0,
                    scale: .1
                })
            }
        })

        const cleanUp = observerFunction(elementsRef, observer, elementsMap)

        return cleanUp;

    }, [elementsRef]);
}

function useRotateFrom0(elementsRef) {
    useEffect(() => {

        const elementsMap = new Map();

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                const index = Object.values(elementsRef.current).indexOf(entry.target)
                if (index !== -1) {
                    if (entry.isIntersecting) {
                        gsap.fromTo(entry.target, {
                            opacity: 0,
                            rotation: 350,
                            scale: .2
                        }, {
                            opacity: 1,
                            rotation: 0,
                            scale: 1,
                            duration: 0.82,
                            delay: 0.32
                        });
                    }
                    observer.unobserve(entry.target);
                }
            })
        }
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.3
        });

        Object.values(elementsRef.current).forEach(element => {
            if (element) {
                elementsMap.set(element, observer);
                gsap.set(element, {
                    opacity: 0,
                    rotation: 350,
                    scale: .2
                })
            }
        })

        const cleanUp = observerFunction(elementsRef, observer, elementsMap)

        return cleanUp;

    }, [elementsRef])
}

function useAppearFromEdge(elementsRef, positions) {
    useEffect(() => {

        const elementsMap = new Map();

        const handleIntersection = (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const index = Object.values(elementsRef.current).indexOf(entry.target)
                    if (index !== -1) {
                        gsap.fromTo(entry.target, {
                            opacity: 0,
                            x: positions[i].x,
                            y: positions[i].y
                        }, {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            delay: 0.32
                        })
                    }
                    observer.unobserve(entry.target)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.3
        });

        Object.values(elementsRef.current).forEach((element, i) => {
            if (element) {
                elementsMap.set(element, observer);
                gsap.set(element, {
                    opacity: 0,
                    x: positions[i].x,
                    y: positions[i].y
                })
            }
        })

        const cleanUp = observerFunction(elementsRef, observer, elementsMap)

        return cleanUp;


    }, [elementsRef, positions])
}

function useWidthIncrease(elementsRef, width = ['100%']) {

    useEffect(() => {

        const elementsMap = new Map();

        const handleIntersection = (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const index = Object.values(elementsRef.current).indexOf(entry.target)
                    if (index !== 1) {
                        gsap.fromTo(entry.target, {
                            opacity: 0,
                            width: 0
                        }, {
                            opacity: 1,
                            width: width[i],
                            duration: 0.95
                        })
                    }
                    observer.unobserve(entry.target);
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.3
        });

        Object.values(elementsRef.current).forEach(element => {
            if (element) {
                elementsMap.set(element, observer);
                gsap.set(element, {
                    opacity: 0,
                    width: 0
                })
            }
        });

        const cleanUp = observerFunction(elementsRef, observer, elementsMap)

        return cleanUp;
    })
}

/*
function useGsapScrollSmoother() {

    // No need to load the script dynamically, it's already in the html
    useEffect(() => {

        // Initialize ScrollSmoother
        const smoother = window.ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
            smooth: 0.01,
            effects: true
        });

        return () => {
            if (smoother) {
                smoother.kill();
            }
        }

    }, []);

}*/

function observerFunction(elementsRef, observer, elementsMap) {

    Object.values(elementsRef.current).forEach(element => {
        if (element) observer.observe(element)
    })

    return () => {
        elementsMap.forEach((_, element) => {
            if (element) observer.unobserve(element)
        });

        elementsMap.clear();
    }

}


export { useAppearY, useAppearX, useAppearScaleFrom0, useRotateFrom0, useAppearFromEdge, useWidthIncrease, /*useGsapScrollSmoother*/ }