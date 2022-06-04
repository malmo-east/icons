import * as React from 'react';
import { SVGProps } from 'react';

const SvgOctagonPlus = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M232 343.1v-64h-64c-13.3 0-24-9.8-24-24 0-12.4 10.7-24 24-24h64v-64c0-12.4 10.7-24 24-24s24 11.6 24 24v64h64c13.3 0 24 11.6 24 24 0 14.2-10.7 24-24 24h-64v64c0 14.2-10.7 24-24 24s-24-9.8-24-24zM.067 191.5c0-19.1 7.585-37.4 21.093-50.9L140.6 21.15A71.962 71.962 0 0 1 191.5.063h129c19.1 0 37.4 7.585 50.9 21.087L490.8 140.6c13.5 13.5 21.1 31.8 21.1 50.9v129c0 19.1-7.6 37.4-21.1 50.9L371.4 490.8a71.983 71.983 0 0 1-50.9 21.1h-129c-19.1 0-37.4-7.6-50.9-21.1L21.15 371.4A71.975 71.975 0 0 1 .067 320.5v-129zm55.033-17c-4.5 4.5-7.03 10.7-7.03 17v129c0 6.3 2.53 12.4 7.03 16.9l119.4 119.5c4.5 4.5 10.7 7 17 7h129c6.3 0 11.6-2.5 17-7l119.4-119.5c4.5-4.5 7-10.6 7-16.9v-129c0-6.3-2.5-12.5-7-17L337.5 55.09c-5.4-4.5-10.7-7.03-17-7.03h-129c-6.3 0-12.5 2.53-17 7.03L55.1 174.5zM21.15 371.4l33.95-34z" />
    </svg>
);

export default SvgOctagonPlus;
