import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleParking = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M280 320h-64v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V160c0-17.7 14.3-32 32-32h80c53 0 96 42.1 96 96 0 53-43 96-96 96zm0-48c26.5 0 48-21.5 48-48s-21.5-48-48-48h-64v96h64zm232-16c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
    </svg>
);

export default SvgCircleParking;
