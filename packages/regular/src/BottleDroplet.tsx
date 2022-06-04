import * as React from 'react';
import { SVGProps } from 'react';

const SvgBottleDroplet = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
        <path d="M112 336c0-32 48-80 48-80s48 48 48 80-21.5 48-48 48-48-21.5-48-48zM256 23.1c0 11.35-6.7 20.24-16 23.53V152.2c38.6 25.9 64 69.9 64 119.8v176c0 35.3-28.7 64-64 64H80c-35.35 0-64-28.7-64-64V272c0-49.9 25.41-93.9 64-119.8V46.64C70.68 43.34 64 34.45 64 24 63.1 10.75 74.74.004 87.1.004L232 0c13.3 0 24 10.74 24 23.1zM128 177.9l-21.3 14.2C80.85 209.4 64 238.8 64 272v176c0 8.8 7.16 16 16 16h160c8.8 0 16-7.2 16-16V272c0-33.2-16.9-62.6-42.7-79.9L192 177.9V48h-64v129.9z" />
    </svg>
);

export default SvgBottleDroplet;
