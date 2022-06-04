import * as React from 'react';
import { SVGProps } from 'react';

const SvgCommentCaptions = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M256 31.1C114.6 31.1.9 124.23.9 239.1c0 47.62 19.91 91.25 52.91 126.3-14.87 39.5-45.87 72.88-46.37 73.25-6.624 7-8.374 17.25-4.625 26C5.817 474.3 14.38 480 24 480c61.49 0 109.1-25.75 139.1-46.25 28.87 9 60.16 14.25 92.91 14.25 141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zm0 368.9c-26.75 0-53.12-4.125-78.36-12.12l-22.75-7.125L135.4 394.5c-14.25 10.12-33.87 21.38-57.49 29 7.374-12.12 14.37-25.75 19.87-40.25l10.62-28-20.62-21.88C69.81 314.1 48.06 282.3 48.06 240c0-88.25 93.24-160 207.1-160s207.1 71.75 207.1 160S370.8 400 256 400zm-16.9-184c0-13.25-10.75-24-23.1-24h-96.9c-12.4 0-23.11 10.8-23.11 24s10.71 24 23.11 24h96c14.1-.9 24-10.7 24-24zm56 56h-80c-13.25 0-23.1 10.75-23.1 24s10.7 24 23.1 24h79.99c13.25 0 23.1-10.75 23.1-24s-8.99-24-23.09-24zm-160 0h-16c-13.25 0-23.1 10.75-23.1 24s10.7 24 23.1 24h15.1c13.25 0 23.1-10.75 23.1-24s-8.1-24-22.2-24zm256.8 0h-15.1c-13.25 0-23.1 10.75-23.1 24s9 24 22.2 24H391c13.25 0 23.1-10.75 23.1-24s-8.9-24-22.2-24zm0-80h-95.99c-13.25 0-23.1 10.75-23.1 24s10.75 24 23.1 24h95.99c13.25 0 23.1-10.75 23.1-24s-9.8-24-23.1-24z" />
    </svg>
);

export default SvgCommentCaptions;
