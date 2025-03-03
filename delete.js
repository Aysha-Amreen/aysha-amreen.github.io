.projectCard {
    width: 360px;
    padding: 20px;
    border-radius: 15px;
    color: #fff;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;

    /* Chrome Effect Background */
    background: linear-gradient(135deg, 
        #e0e0e0, 
        #b8b8b8, 
        #f5f5f5, 
        #b8b8b8, 
        #e0e0e0);
    background-size: 200% 200%;
    animation: chromeEffect 6s linear infinite;

    /* Chrome-Like Border */
    border: 2px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2),
                inset 0 1px 2px rgba(255, 255, 255, 0.6);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Subtle Reflective Shine */
.projectCard::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        115deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0.2) 100%
    );
    transform: skewX(-25deg);
    pointer-events: none;
    opacity: 0.3;
    transition: all 0.5s ease;
}

/* Add a Shimmer Effect on Hover */
.projectCard:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 35px rgba(0, 0, 0, 0.3);
}

.projectCard:hover::before {
    left: 100%;
    transition: all 0.5s ease;
}

/* Chrome Animation */
@keyframes chromeEffect {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}
