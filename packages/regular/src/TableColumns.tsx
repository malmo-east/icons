import * as React from 'react';
import { SVGProps } from 'react';

const SvgTableColumns = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M448 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zM64 432h168V160H48v256c0 8.8 7.16 16 16 16zm216 0h168c8.8 0 16-7.2 16-16V160H280v272z" />
    </svg>
);

export default SvgTableColumns;
