import * as React from 'react';
import { SVGProps } from 'react';

const SvgWavePulse = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M640 255.1c0 14.2-10.7 24.9-24 24.9H495.2l-57.5 122.2c-4.375 9.125-13.5 14.75-24 13.63-10-.875-18.5-8-21-17.87l-70-268.6-75.2 363.54c-2.3 10.9-11.6 18.7-22.7 19.1h-.8c-10.75 0-20.25-7.25-23.12-17.62L141.8 280H23.1C10.75 280 0 269.3 0 256s10.75-24 23.1-24H160c10.79 0 20.25 7.206 23.12 17.61l37.5 136L296.5 19.12C298.8 8.25 308.4.25 319.5 0h.5c10.88 0 20.5 7.375 23.25 18l79.25 303.9 35.75-76.12C462.2 237.4 470.8 232 480 232h136c13.3 0 24 10.7 24 23.1z" />
    </svg>
);

export default SvgWavePulse;
