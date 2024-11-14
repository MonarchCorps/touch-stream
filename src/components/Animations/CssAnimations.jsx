import { useEffect } from 'react';

function useCssAnimations(elementsRef) {
    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const classNames = elementsRef.current[entry.target]?.className;
                    if (classNames) {
                        classNames.split(' ').forEach(className => {
                            entry.target.classList.add(className);
                        });
                        // Trigger reflow to ensure animation plays
                        entry.target.offsetWidth; // Access offsetWidth to force reflow
                    }
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1
        });

        Object.keys(elementsRef.current).forEach(key => {
            const { element } = elementsRef.current[key];
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            Object.keys(elementsRef.current).forEach(key => {
                const { element } = elementsRef.current[key];
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [elementsRef]);
}

export default useCssAnimations;

