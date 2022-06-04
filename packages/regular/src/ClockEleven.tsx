import * as React from 'react';
import { SVGProps } from 'react';

const SvgClockEleven = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M232 120c0-13.3 10.7-24 24-24s24 10.7 24 24v136c0 10.6-6.9 19.9-17.9 22.1-9.3 3.9-20.2 0-26.1-8.8l-64-96c-7.3-11-4.3-25.9 6.7-33.3 11-7.3 25.9-4.3 32.4 6.7l20 30 .9-56.7zM256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256z" />
    </svg>
);

export default SvgClockEleven;
