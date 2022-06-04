import * as React from 'react';
import { SVGProps } from 'react';

const SvgClockTen = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M232 120c0-13.3 10.7-24 24-24s24 10.7 24 24v136c0 8.9-4.9 16.1-12.7 21.2-7.8 4.1-17.2 3.7-24.6-2.1l-96-64c-11-6.5-14-21.4-6.7-32.4 7.4-11 22.3-14 33.3-6.7l57.8 39.2.9-91.2zM256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256z" />
    </svg>
);

export default SvgClockTen;
