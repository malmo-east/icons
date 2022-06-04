import * as React from 'react';
import { SVGProps } from 'react';

const SvgSubscript = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M328 112c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 .01c-8.031 0-15.53 3.993-19.97 10.68L176 212.7 83.97 74.69C79.53 68 72.03 64.01 64 64.01L24 64C10.75 64 0 74.75 0 88s10.75 24 24 24h27.16l96 144-96 144H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h40c8.031 0 15.53-4.007 19.97-10.69L176 299.3l92.03 138C272.5 444 279.1 448 288 448h40c13.25 0 24-10.75 24-24s-10.75-24-24-24h-27.16l-96-144 96-144H328zm160 352h-16V312c0-13.2-10.7-24-24-24h-40c-13.2 0-24 10.8-24 24s10.75 24 24 24h16v128h-16c-13.25 0-24 10.75-24 24s10.8 24 24 24h80c13.25 0 24-10.75 24-24s-10.7-24-24-24z" />
    </svg>
);

export default SvgSubscript;
