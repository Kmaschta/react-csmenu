export default (size) => {
    const radius = size / 2;
    const computeCircumference = x => 2 * Math.PI * x;

    return {
        wrapper: {
            cursor: 'pointer',
            display: 'inline-block',
        },
        svg: {
            overflow: 'visible',
        },
        cancel: {
            fill: '#fff',
            textAnchor: 'middle',
            dominantBaseline: 'central',
        },
        background: {
            cx: '50%',
            cy: '50%',
            r: `${radius * 1.5}`,
            fill: 'black',
            opacity: '0.6',
        },
        circle: (items, i = 0) => {
            const arc = computeCircumference(radius / items.length);
            const circumferenceButArc = computeCircumference(radius) - arc;
            const arcOffset = computeCircumference(items.length - 1);

            return {
                cx: '50%',
                cy: '50%',
                r: `${radius}`,
                fill: 'none',
                opacity: '0.6',
                stroke: '#655',
                strokeWidth: `${radius}`,
                strokeDasharray: `${arc - arcOffset / 2} ${circumferenceButArc + arcOffset / 2}`,
                strokeDashoffset: `${(computeCircumference(radius / items.length) * i) - (arcOffset / items.length)}`,
            };
        },
    };
};
