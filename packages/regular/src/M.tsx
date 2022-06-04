import * as React from 'react';
import { SVGProps } from 'react';

const SvgM = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M424 480c-13.25 0-24-10.75-24-24V136.1l-155.9 237c-8.875 13.5-31.25 13.5-40.13 0L48 136.1V456c0 13.3-10.75 24-24 24S0 469.3 0 456V56c0-10.61 6.969-19.95 17.12-22.98 10.19-3.078 21.09.937 26.94 9.797L224 316.3 403.9 42.8c5.812-8.859 16.66-12.89 26.94-9.797C441 36.05 448 45.39 448 56v400c0 13.3-10.7 24-24 24z" />
    </svg>
);

export default SvgM;
