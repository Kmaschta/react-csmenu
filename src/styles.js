export default {
    wrapper: {
        cursor: 'pointer',
        display: 'inline-block',
    },
    svg: {
        overflow: 'visible',
    },
    circle: (size) => ({
        stroke: 'black',
        opacity: '0.6',
        cx: '50%',
        cy: '50%',
        r: `${size / 2}`,
    }),
};
