const circleOffset = 10;

export default {
    wrapper: {
        cursor: 'pointer',
        display: 'inline-block',
    },
    svg: {
        overflow: 'visible',
    },
    cancel: {
        textAnchor: 'middle',
    },
    circle: (size, nbItems, i = 0) => {
        const radius = size / 2;
        const computeCircumference = x => 2 * Math.PI * x;
        const arc = computeCircumference(radius / nbItems);
        const circumferenceButArc = computeCircumference(radius) - arc;

        return {
            cx: '50%',
            cy: '50%',
            r: radius,
            fill: 'none',
            opacity: '0.6',
            stroke: '#655',
            strokeWidth: `${radius}`,
            strokeDasharray: `${arc - circleOffset / 2} ${circumferenceButArc + circleOffset / 2}`,
            strokeDashoffset: `${computeCircumference(((radius * i) / nbItems))}`,
        };
    },
};
