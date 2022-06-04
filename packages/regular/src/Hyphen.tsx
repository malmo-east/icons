import * as React from 'react';
import { SVGProps } from 'react';

const SvgHyphen = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
        <path d="M320 256c0 13.3-10.7 24-24 24H24c-13.25 0-24-10.7-24-24 0-13.2 10.75-24 24-24h272c13.3 0 24 10.8 24 24z" />
    </svg>
);

export default SvgHyphen;
