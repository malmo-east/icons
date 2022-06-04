import * as React from 'react';
import { SVGProps } from 'react';

const SvgFont = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M424 432h-31.44L246.4 47.47c-3.5-9.25-12.51-15.37-22.38-15.46-.094 0 .063 0 0 0-9.812 0-18.68 5.961-22.34 15.09L47.76 432H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24H99.45l35.21-88h173.1l33.44 88H312c-13.25 0-24 10.75-24 24s10.8 24 24 24h112c13.25 0 24-10.75 24-24s-10.7-24-24-24zM153.9 296l69.58-173.9L289.5 296H153.9z" />
    </svg>
);

export default SvgFont;
