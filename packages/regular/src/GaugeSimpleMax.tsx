import * as React from 'react';
import { SVGProps } from 'react';

const SvgGaugeSimpleMax = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M256 296c10.3 0 19.9 2.8 28.2 7.6l110.2-75.4c11-7.5 25.9-4.7 33.4 6.2 7.5 11 4.7 25.9-6.2 33.4l-110.3 75.4c.5 2.9.7 5.8.7 8.8 0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56.9 56-56.9v.9zm0 216C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm208-256c0-114.9-93.1-208-208-208S48 141.1 48 256s93.1 208 208 208 208-93.1 208-208z" />
    </svg>
);

export default SvgGaugeSimpleMax;
