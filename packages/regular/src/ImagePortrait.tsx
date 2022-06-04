import * as React from 'react';
import { SVGProps } from 'react';

const SvgImagePortrait = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M192 256c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.7-64 64 28.7 64 64 64zM320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm16 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V64c0-8.822 7.178-16 16-16h256c8.822 0 16 7.178 16 16v384zM224 288h-64c-44.18 0-80 35.82-80 80 0 8.8 7.16 16 16 16h192c8.836 0 16-7.164 16-16 0-44.2-35.8-80-80-80z" />
    </svg>
);

export default SvgImagePortrait;
