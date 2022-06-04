import * as React from 'react';
import { SVGProps } from 'react';

const SvgPeace = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm208 256c0 40.47-11.8 78.16-31.88 110.1L280 244.4V49.5C383.4 61.45 464 149.4 464 256zM232 462.5c-47.39-5.477-89.98-26.86-122.2-58.77L232 305.9v156.6zm48-156.6 122.2 97.78c-32.24 31.91-74.83 53.3-122.2 58.77V305.9zM232 49.5v194.9L79.9 366.1C59.8 334.2 48 296.5 48 256c0-106.6 80.6-194.55 184-206.5z" />
    </svg>
);

export default SvgPeace;
