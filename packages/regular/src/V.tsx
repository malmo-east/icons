import * as React from 'react';
import { SVGProps } from 'react';

const SvgV = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M192 480a23.993 23.993 0 0 1-22.12-14.71l-168-400C-3.266 53.08 2.484 39 14.7 33.88c12.21-5.18 26.3.6 31.43 12.82L192 394 337.9 46.7c5.125-12.23 19.11-18.03 31.42-12.83 12.22 5.125 17.97 19.2 12.83 31.42l-168 400A24.005 24.005 0 0 1 192 480z" />
    </svg>
);

export default SvgV;
