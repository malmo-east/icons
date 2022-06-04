import * as React from 'react';
import { SVGProps } from 'react';

const SvgTableLayout = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M448 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm0 48H64c-8.84 0-16 7.16-16 16v64h416V96c0-8.84-7.2-16-16-16zM64 432h80V208H48v208c0 8.8 7.16 16 16 16zm128 0h256c8.8 0 16-7.2 16-16V208H192v224z" />
    </svg>
);

export default SvgTableLayout;
