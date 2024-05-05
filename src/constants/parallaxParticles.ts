export const parallaxParticles = {
    key: 'parallax',
    name: 'Parallax',
    fullScreen: {
        zIndex: -1,
        enable: false,
    },
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
            },
        },
        color: {
            value: '#ffffff',
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: {
                min: 0.1,
                max: 0.5,
            },
            animation: {
                enable: true,
                speed: 0.2,
                sync: false,
            },
        },
        size: {
            value: {
                min: 1,
                max: 7,
            },
            animation: {
                enable: true,
                speed: 2,
                sync: false,
            },
        },
        links: {
            enable: true,
            distance: 100,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        triangles: {
            enable: true,
            distance: 150,
            color: '#ffffff',
        },
        move: {
            enable: true,
            speed: 0.5,
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: false,
                mode: 'grab',
                parallax: {
                    enable: true,
                    smooth: 75,
                    force: 100,
                },
            },
            onClick: {
                enable: false,
                mode: 'repulse',
            },
        },
        modes: {
            grab: {
                distance: 200,
                links: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
            },
            repulse: {
                distance: 200,
            },
            push: {
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
        },
    },
};
