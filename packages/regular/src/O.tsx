import * as React from 'react';
import { SVGProps } from 'react';

const SvgO = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M224 480C100.5 480 0 379.5 0 256S100.5 32 224 32s224 100.5 224 224-100.5 224-224 224zm0-400c-97.9 0-176 78.1-176 176s78.97 176 176 176 176-78.95 176-176S321 80 224 80z" />
    </svg>
);

export default SvgO;
