import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircle8 = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm80-264c0-39.7-32.3-72-72-72h-16c-39.7 0-72 32.3-72 72 0 15.77 5.254 30.26 13.9 42.13C171.8 256.8 160 278.9 160 304c0 44.1 35.9 80 80 80h32c44.13 0 80-35.88 80-80 0-25.06-11.81-47.19-29.9-61.87C330.7 230.3 336 215.8 336 200zm-88-24h16c13.2 0 24 10.8 24 24s-10.8 24-24 24h-16c-13.2 0-24-10.8-24-24s10.8-24 24-24zm24 160h-32c-17.66 0-32-14.34-32-32s14.34-32 32-32h32c17.66 0 32 14.34 32 32s-14.3 32-32 32z" />
    </svg>
);

export default SvgCircle8;
