import * as React from 'react';
import { SVGProps } from 'react';

const SvgMountains = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M8.55 394.4 225.2 49.01C231.9 38.42 243.5 32 255.1 32c13.4 0 25 6.42 31.6 17.01l126 200.69 48.2-79c3.2-6.6 11.3-10.7 19.1-10.7 7.8 0 15 4.1 19.1 10.7l132 216.4c5.8 9.5 8.9 20.6 8.9 31.8 0 33.7-27.4 61.1-61.1 61.1H55.91C25.03 480 0 454.1 0 424.1c0-10.5 2.964-20.8 8.551-29.7H8.55zm454.25 25.5L255.1 90.31 49.21 419.9c-.79 1.2-2.11 2.7-2.11 4.2 0 4.4 4.44 7.9 8.81 7.9H456.1c4.4 0 7.9-3.5 7.9-7.9 0-1.5-.4-3-1.2-4.2z" />
    </svg>
);

export default SvgMountains;
