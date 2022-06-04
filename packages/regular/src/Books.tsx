import * as React from 'react';
import { SVGProps } from 'react';

const SvgBooks = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M510.4 435.4 402.7 35.5C396.9 14.08 377.5 0 356.4 0c-4.111 0-8.294.531-12.46 1.641l-61.82 16.48c-5.885 1.57-11.14 4.258-15.78 7.633C258.3 10.51 242.4 0 224 0h-64c-8.8 0-16.9 2.531-24 6.656C128.9 2.531 120.8 0 112 0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h64c8.787 0 16.92-2.531 24-6.656 7.1 4.156 15.2 6.656 24 6.656h64c26.51 0 48-21.49 48-48V165.3l83.8 311.3c5.8 21.3 25.1 35.4 46.3 35.4 4.111 0 8.293-.531 12.46-1.641l61.82-16.48C502 487 517.2 460.8 510.4 435.4zM224 48v48h-64V48h64zm-64 96h64v224h-64V144zm-48 224H48V144h64v224zm0-320v48H48V48h64zM48 464v-48h64v48H48zm112 0 .001-47.1L224 416v48h-64zM294.4 64.5l61.83-16.48 12.47 45.91-61.9 16.47-12.4-45.9zm24.9 92.1 61.91-16.51 58.04 215.3-61.91 16.51-58.04-215.3zm82.9 307.5-12.41-46.04 61.91-16.51 12.38 45.94-61.88 16.61z" />
    </svg>
);

export default SvgBooks;
