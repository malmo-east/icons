import * as React from 'react';
import { SVGProps } from 'react';

const SvgJetFighter = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M296 0c13.3 0 24 10.75 24 24s-10.7 24-24 24h-3.1L386 176h97.1c5.7 0 11.3.9 16.7 2.5l108.1 33.8c18.2 6 32.1 22.8 32.1 43.7 0 20-13.9 37.7-32.1 43.7l-108.1 33.7c-5.4 1.7-11 2.6-16.7 2.6H386l-93.1 128h3.1c13.3 0 24 10.7 24 24s-10.7 24-24 24h-38.1c-7.6 8.5-20.1 10.5-29.9 4.8-3.5 2-7.6 3.2-12 3.2-7.1 0-13.5-3.1-17.9-8H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V336h-14.1l-31.6 31.6a55.924 55.924 0 0 1-39.6 16.4H88c-30.93 0-56-25.1-56-56v-48h-8c-13.25 0-24-10.7-24-24s10.75-24 24-24h8v-48c0-30.9 25.07-56 56-56h18.7c14.9 0 29.1 5.9 39.6 16.4l31.6 31.6H192V48h-8c-13.3 0-24-10.75-24-24s10.7-24 24-24h14.1c4.4-4.91 10.8-7.1 17.9-7.1 4.4 0 8.5.269 12 2.312 9.8-5.682 22.3-3.678 29.9 4.788H296zm30.7 176L240 56.8V176h86.7zm0 160H240v119.2L326.7 336zM80 280v48c0 4.4 3.58 8 8 8h18.7c2.2 0 4.2-.8 5.7-2.3l45.7-45.7h325c.8 0 1.6-.1 2.4-.4L586.7 256l-101.2-31.6c-.8-.3-1.6-.4-2.4-.4h-325l-45.7-45.7c-1.5-1.5-3.5-2.3-5.7-2.3H88c-4.42 0-8 3.6-8 8v48h56c13.3 0 24 10.7 24 24s-10.7 24-24 24H80z" />
    </svg>
);

export default SvgJetFighter;
