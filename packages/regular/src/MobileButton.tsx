import * as React from 'react';
import { SVGProps } from 'react';

const SvgMobileButton = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M304 0H80C44.65 0 16 28.65 16 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm16 448c0 8.822-7.178 16-16 16H80c-8.82 0-16-7.2-16-16V64c0-8.822 7.178-16 16-16h224c8.8 0 16 7.18 16 16v384zm-128-56c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.3-10.7-24-24-24z" />
    </svg>
);

export default SvgMobileButton;
