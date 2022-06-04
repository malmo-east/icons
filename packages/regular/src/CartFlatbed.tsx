import * as React from 'react';
import { SVGProps } from 'react';

const SvgCartFlatbed = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M616 399.1H144V64c0-35.2-28.8-64-64-64H24C10.8 0 0 10.8 0 23.1c0 13.2 10.8 23.1 24 23.1h48c13.25 0 24 10.75 24 24v343.1c0 17.6 14.4 31.1 31.1 31.1l34.92.002C161.1 453 160 458.4 160 464c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.643-1.128-10.97-2.917-16h197.9c-1.789 5.029-2.928 10.36-2.928 16C448 490.5 469.5 512 496 512c26.51 0 48.01-21.49 48.01-47.1 0-5.643-1.118-10.97-2.907-16L616 447.1c13.2 0 24-10.8 24-23.1 0-13.2-10.8-24.9-24-24.9zM256 352h288c35.35 0 64-28.66 64-64V96c0-35.35-28.65-63.1-64-63.1H256c-35.35 0-64 28.65-64 63.1v191.1c0 36.2 28.7 64.9 64 64.9zM240 96c0-8.82 7.2-16 16-16l80-.002v111.1l64-31.1 64 31.1V80h80c8.822 0 16 7.178 16 15.1v191.1c0 8.822-7.178 15.1-16 15.1H256c-8.822 0-16-7.178-16-15.1V96z" />
    </svg>
);

export default SvgCartFlatbed;
