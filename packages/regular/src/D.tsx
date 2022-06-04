import * as React from 'react';
import { SVGProps } from 'react';

const SvgD = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M154.7 480H24c-13.25 0-24-10.7-24-24V56c0-13.25 10.75-24 24-24h130.7C281.1 32 384 132.5 384 256S281.1 480 154.7 480zM48 432h106.7c100 0 181.3-79 181.3-176S254.66 80 154.7 80H48v352z" />
    </svg>
);

export default SvgD;
