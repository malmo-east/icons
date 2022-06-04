import * as React from 'react';
import { SVGProps } from 'react';

const SvgTemperatureArrowUp = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M192 368c0 26.5-21.5 48.08-48 48.08S96 394.5 96 368c0-20.88 13.38-38.5 32-45.13V112c0-8.7 7.3-16 16-16s15.1 7.25 15.1 16v210.9c19.5 6.6 32.9 24.2 32.9 45.1zm63.1-89.5c19.75 24.62 32 55.5 32 89.5 0 79.5-64.5 144-143.1 144S0 447.5 0 368c0-34 12.25-64.88 32-89.5V112C32 50.13 82.13 0 144 0s111.1 50.13 111.1 112v166.5zM240 368c0-27-11.75-47.25-21.5-59.63L208 295.3V112c0-35.25-28.75-64-64-64s-64 28.75-64 64v183.4l-10.5 13.1C59.75 320.8 48 341 48 368c0 52.88 43.13 96 96 96s96-43.1 96-96zm264.1-214.2c-9.844 8.844-24.98 8.062-33.91-1.781L440 118.5V456c0 13.25-10.75 24-24 24s-24-10.75-24-24V118.5l-30.16 33.52c-8.891 9.844-24.05 10.62-33.91 1.781-9.844-8.875-10.64-24.03-1.781-33.91l72-80C402.7 34.88 409.2 32 416 32s13.28 2.875 17.84 7.938l72 80c8.86 9.862 8.06 24.162-1.74 33.862z" />
    </svg>
);

export default SvgTemperatureArrowUp;
