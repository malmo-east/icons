import * as React from 'react';
import { SVGProps } from 'react';

const SvgMonument = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M216 288c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48zM175 7.029c9.4-9.372 24.6-9.372 33.1 0l80 80.001c4.6 3.77 7.1 8.7 7.7 13.97l45.4 363H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h18.81l45.38-363c.66-5.27 3.07-10.2 6.84-13.97L175 7.029zm17 50.911-57.2 57.16L91.19 464H292.8l-43.6-348.9L192 57.94z" />
    </svg>
);

export default SvgMonument;
