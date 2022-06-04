import * as React from 'react';
import { SVGProps } from 'react';

const SvgIndustry = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M32 88c0-30.93 25.07-56 56-56h48c30.9 0 56 25.07 56 56v84.9l103.8-60.6c32-18.64 72.2 4.4 72.2 41.5v27l102.1-65.4c32-20.42 73.9 2.5 73.9 40.5V408c0 39.8-32.2 72-72 72H104c-39.76 0-72-32.2-72-72V88zm56-8c-4.42 0-8 3.58-8 8v320c0 13.3 10.75 24 24 24h368c13.3 0 24-10.7 24-24V155.9l-139.1 89c-7.4 4.7-16.7 5-24.4.8-7.7-4.2-12.5-12.3-12.5-21.1v-70.8l-139.9 81.6c-7.4 4.3-16.6 4.4-24.1.1-7.4-4.3-12-12.2-12-20.8V88c0-4.42-3.6-8-8-8H88z" />
    </svg>
);

export default SvgIndustry;
