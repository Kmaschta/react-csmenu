export default (size, closingRatio = 0.33) => ({
    wrapper: {
        cursor: 'pointer',
        display: 'inline-block',
    },
    svg: {
        overflow: 'visible',
    },
    closingLabel: {
        fill: '#fff',
        textAnchor: 'middle',
        dominantBaseline: 'central',
    },
    closingCircle: {
        cx: '50%',
        cy: '50%',
        r: `${size * closingRatio}`,
        fill: 'black',
    },
    background: {
        cx: '50%',
        cy: '50%',
        r: `${size}`,
        fill: 'black',
        opacity: '0.6',
    },
    item: (items, i, origin, hovered = false) => ({
        fill: hovered ? 'black' : 'transparent',
        opacity: '0.7',
        transform: `rotate(${-360 / items.length * i}deg)`,
        transformOrigin: `${origin.x}px ${origin.y}px`,
    }),
});
