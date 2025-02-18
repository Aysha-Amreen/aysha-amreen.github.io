import { useEffect } from 'react';

const useParallaxEffect = (className) => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const parallaxElement = document.querySelector(`.${className}`);
            const parallaxSpeed = 0.5;

            if (parallaxElement) {
                console.log('Parallax element found:', parallaxElement);
                parallaxElement.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
                console.log('New transform value:', parallaxElement.style.transform);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [className]);
};

export default useParallaxEffect;
