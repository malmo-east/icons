import * as React from 'react';
import { SVGProps } from 'react';

const SvgWindowMinimize = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M0 456c0-13.3 10.75-24 24-24h464c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24z" />
    </svg>
);

export default SvgWindowMinimize;
