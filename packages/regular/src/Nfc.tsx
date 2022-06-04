import * as React from 'react';
import { SVGProps } from 'react';

const SvgNfc = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M330.7 112H224c-13.25 0-24 10.75-24 24v78.66c-14.3 7.44-24 23.64-24 41.34 0 26.51 21.49 48 48 48s48-21.49 48-48c0-17.72-9.713-33.03-24-41.34V160h72v192H128V160h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-18.7C96.75 112 80 128.8 80 149.3v213.3c0 20.7 16.75 37.4 37.3 37.4h213.3c20.7 0 37.4-16.7 37.4-37.3V149.3c0-20.5-16.7-37.3-37.3-37.3zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v320z" />
    </svg>
);

export default SvgNfc;
