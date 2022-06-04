import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleDivide = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M224 160c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm120 72c13.3 0 24 10.7 24 24s-10.7 24-24 24H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h176zm-56 120c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm224-96c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
    </svg>
);

export default SvgCircleDivide;
