import * as React from 'react';
import { SVGProps } from 'react';

const SvgMemoPad = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M120 320h208c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.2 0-24 10.8-24 24s10.8 24 24 24zm0 96h112c13.25 0 24-10.75 24-24s-10.75-24-24-24H120c-13.2 0-24 10.8-24 24s10.8 24 24 24zm0-192h208c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.2 0-24 10.8-24 24s10.8 24 24 24zM384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm16 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V128h352v320z" />
    </svg>
);

export default SvgMemoPad;
