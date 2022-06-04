import * as React from 'react';
import { SVGProps } from 'react';

const SvgWalker = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M112.4 224 47.33 493.6c-3.11 12.9-16.08 20.8-28.96 17.7-12.886-3.1-20.81-16-17.7-28.9L100.8 67.35C110.4 27.84 145.7 0 186.4 0H320c48.6 0 88 39.4 88 88v300.7c23.5 9.4 40 32.4 40 59.3 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.9 16.5-49.9 40-59.3V224H112.4zm74-176c-18.5 0-34.6 12.65-38.9 30.61L123.1 176H360V88c0-22.09-17.9-40-40-40H186.4zM384 464c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z" />
    </svg>
);

export default SvgWalker;
