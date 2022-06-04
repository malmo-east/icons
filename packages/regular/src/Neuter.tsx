import * as React from 'react';
import { SVGProps } from 'react';

const SvgNeuter = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M368 176C368 78.8 289.2 0 192 0S16 78.8 16 176c0 89.04 66.18 162.4 152 174.2V488c0 13.3 10.8 24 24 24s24-10.75 24-24V350.2C301.8 338.4 368 265 368 176zM192 304c-70.58 0-128-57.42-128-128S121.42 48 192 48s128 57.42 128 128-57.4 128-128 128z" />
    </svg>
);

export default SvgNeuter;
