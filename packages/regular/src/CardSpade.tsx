import * as React from 'react';
import { SVGProps } from 'react';

const SvgCardSpade = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M175 141.2c9.4-9.4 24.6-9.4 33.1 0l83.2 82.3c21.9 21.9 21.9 57.3 0 79.2-21.8 21.9-57.3 21.9-79.2 0l-4-3.2c.6-.3.2-.6-1-.9v36.5h16c9.7 0 16 8.1 16 16 0 9.7-6.3 16-16 16h-64c-7.9 0-16-6.3-16-16 0-7.9 8.1-16 16-16h16v-36.5c.6.3.2.6-.1.9l-3.1 3.2c-22.8 21.9-57.4 21.9-79.23 0-21.87-21.9-21.87-57.3 0-79.2L175 141.2zM0 64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64zm48 0v384c0 8.8 7.16 16 16 16h256c8.8 0 16-7.2 16-16V64c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16z" />
    </svg>
);

export default SvgCardSpade;
