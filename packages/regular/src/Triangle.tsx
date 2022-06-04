import * as React from 'react';
import { SVGProps } from 'react';

const SvgTriangle = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M256 32c14.2 0 27.3 7.52 34.5 19.75l216 368.05c7.3 12.3 7.3 27.6.2 40.1-7.1 12.4-20.4 20.1-34.7 20.1H40c-14.34 0-27.59-7.7-34.713-20.1-7.126-12.5-7.043-27.8.216-40.1L221.5 51.75C228.7 39.52 241.8 32 256 32zm0 55.8L53.97 432H458L256 87.8zm6.9-11.74s0 .01 0 0zm0 0L256 72z" />
    </svg>
);

export default SvgTriangle;
