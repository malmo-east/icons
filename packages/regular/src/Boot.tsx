import * as React from 'react';
import { SVGProps } from 'react';

const SvgBoot = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M414.1 263.7 352 248V144c17.75 0 32-14.25 32-32V48c0-26.51-21.5-48-48-48H48C21.49 0 0 21.49 0 48v418.7c0 8.373 3.418 16.55 9.322 22.49L32 512h64l32-32 32 32h64l32-32 32 32h64l32-32 32 32h64l22.63-22.67c5.97-6.03 9.37-14.13 9.37-22.63V388c0-58.8-40-110-97.9-124.3zM48 48h288v48H48V48zm416 368H48V144h256v48h-64c-8.8 0-16 7.2-16 15.1s7.2 16.9 16 16.9h64v32h-64c-8.8 0-16 7.2-16 16s7.2 16 15.1 16h74.13l89.25 22.25C439.1 319.2 464 351.1 464 387.9V416z" />
    </svg>
);

export default SvgBoot;
