import * as React from 'react';
import { SVGProps } from 'react';

const SvgRoute = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M416 256h-88c-22.1 0-40 17.9-40 40s17.9 40 40 40h96c48.6 0 88 39.4 88 88s-39.4 88-88 88H139.6c8.7-9.9 19.3-22.6 30-36.8 2.7-3.6 5.4-7.4 8.2-11.2H424c22.1 0 40-17.9 40-40s-17.9-40-40-40h-96c-48.6 0-88-39.4-88-88s39.4-88 88-88h46.1C348.3 174.9 320 130.7 320 96c0-53.02 42.1-96 96-96 53 0 96 42.98 96 96 0 39.2-36 90.4-63.9 124.2C430.4 241.6 416 256 416 256zm38.1-129.5c7.6-15.2 9.9-25.4 9.9-30.5 0-26.51-21.5-48-48-48s-48 21.49-48 48c0 5.1 2.3 15.3 9.9 30.5 7.3 14.5 17.5 30 28.5 44.7 3.2 4.3 6.4 8.4 9.6 12.4 3.2-4 6.4-8.1 9.6-12.4 11-14.7 21.2-30.2 28.5-44.7zm-326 349.7c-3.3 4-6.5 6.9-9.5 11.2-.3.4-1.5.7-.9 1-3.7 4.3-7.1 8-10 11.2-.1.2-.3.3-.4.5C100.4 507.6 96 512 96 512s-14.43-14.4-32.1-35.8C35.99 442.4 0 391.2 0 352c0-53.9 42.98-96 96-96 53 0 96 42.1 96 96 0 34.7-28.3 78.9-54.1 112-3.3 4.3-6.6 8.3-9.8 12.2zm6-93.7c7.6-15.2 9.9-25.4 9.9-30.5 0-26.5-21.5-48-48-48-26.51 0-48 21.5-48 48 0 5.1 2.29 15.3 9.93 30.5 7.25 14.5 17.45 30 28.47 44.7 3.21 4.3 6.44 8.4 9.6 12.4 3.16-4 6.4-8.1 9.6-12.4 11-14.7 21.2-30.2 28.5-44.7z" />
    </svg>
);

export default SvgRoute;
