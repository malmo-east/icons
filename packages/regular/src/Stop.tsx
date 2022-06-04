import * as React from 'react';
import { SVGProps } from 'react';

const SvgStop = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M320 64H64C28.65 64 0 92.65 0 128v255.1c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128c0-35.35-28.7-64-64-64zm16 320c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V128c0-8.822 7.178-16 16-16h256c8.822 0 16 7.178 16 16v256z" />
    </svg>
);

export default SvgStop;
