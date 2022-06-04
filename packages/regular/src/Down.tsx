import * as React from 'react';
import { SVGProps } from 'react';

const SvgDown = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M381.6 259.8c-5-12-16.7-19.8-29.6-19.8h-80V80c0-26.51-21.5-48-48-48h-64c-26.5 0-48 21.49-48 48v160H32a31.997 31.997 0 0 0-29.56 19.75C-2.516 271.7.219 285.5 9.375 294.6l160 176C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-176c9.18-9.125 11.88-22.925 6.98-34.825zM192 425.4 70.63 288H160V80h64v208h89.37L192 425.4z" />
    </svg>
);

export default SvgDown;
