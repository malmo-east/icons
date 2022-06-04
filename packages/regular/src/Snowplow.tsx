import * as React from 'react';
import { SVGProps } from 'react';

const SvgSnowplow = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M144 400c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm32 0c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm128 0c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm32 0c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm96-168.9v64h80v-56c0-5.1 2.2-10.8 6.2-15.2l80-88c9-9.9 24.1-10.6 33.9-1.7 9 9 10.6 24.1 1.7 33.9L560 249.3v141.4l73.8 81.2c8.9 9.8 7.3 24.9-1.7 33.9-9.8 8.9-24.9 7.3-33.9-1.7l-80-88c-4-4.4-6.2-11-6.2-16.1v-56h-47c9.5 16.5 15 35.6 15 56 0 61.9-50.1 112-112 112H112C50.14 512 0 461.9 0 400c0-38.1 18.98-71.7 48-91.9V176c0-26.5 21.49-48 48-48h16V40c0-22.09 17.9-40 40-40h146.8c22.5 0 42.8 13.46 51.6 34.18l77.2 182.52c.5 1.2.9 2.4.5 3.6 2.8 3.5 3.9 7.5 3.9 11.7v-.9zm-133.2-184H160v86.5l59.5 73.5h152.3L306.2 52.88c-1.3-2.96-4.2-5.78-7.4-5.78zm85.2 242v-34H208c-7.3 0-14.2-2.4-18.7-9l-56.8-71H96v114c5.2-.7 10.6-2 16-2h256c5.4 0 10.8 1.3 16 2zM48 400c0 35.3 28.65 64 64 64h256c35.3 0 64-28.7 64-64s-28.7-64-64-64H112c-35.35 0-64 28.7-64 64z" />
    </svg>
);

export default SvgSnowplow;
