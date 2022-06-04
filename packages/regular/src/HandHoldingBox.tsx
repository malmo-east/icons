import * as React from 'react';
import { SVGProps } from 'react';

const SvgHandHoldingBox = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M551.1 312.1c-31.13-26.36-69.26-16.12-88.39-1.75l-60.38 45.47h-3.375C399.7 317.9 369.3 288 330.7 288h-144c-28.4 0-56.4 9.4-78.6 26.4l-28.38 21.74H24C10.8 336.1 0 346.9 0 360.1c0 13.19 10.8 23.99 24 23.99l72-.06 41.26-31.42c14-10.74 31.5-16.49 49.51-16.49h144c27.88 0 29 40.23-1.125 40.23H269.8c-7.5 0-13.75 6.123-13.75 13.74 0 7.62 6.252 13.87 13.75 13.87h134.6a44.78 44.78 0 0 0 26.92-8.996l61.26-46.1c8.252-6.12 20.5-6.62 28.38 0 10.12 8.496 9.375 23.11-.877 30.73l-100.6 75.46c-7.75 5.746-17.13 8.994-26.88 8.994H24C10.8 464 0 474.8 0 488c0 13.2 10.8 24 24 24h368.8c20 0 39.38-6.496 55.26-18.49l100.8-75.83c16.63-12.49 26.5-31.48 27.13-51.97.71-20.51-8.19-40.11-24.89-53.61zM160 256h255.1c27.3 0 48.9-21.6 48.9-48V48c0-26.4-21.6-48-47.1-48H161.8C133.6 0 112 21.6 112 48v160c0 26.4 21.6 48 48 48zm0-208h63.97l-.87 80 63.1-32 64 32V48H416v160H160V48z" />
    </svg>
);

export default SvgHandHoldingBox;
