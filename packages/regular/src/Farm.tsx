import * as React from 'react';
import { SVGProps } from 'react';

const SvgFarm = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M48 464h80.4c.7 18.2 8.7 34.7 19.7 48H48c-26.51 0-48-21.5-48-48V112C0 50.14 50.14 0 112 0c54.6 0 100.1 39.06 109.1 90.77-14.6 7.1-27.2 19.53-34.4 35.03L163.3 176H48v288zm128-336v-16c0-35.35-28.7-64-64-64-35.35 0-64 28.65-64 64v16h128zm144 120c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-48zm180.1-128.4c8.9 3.9 16.1 10.9 20.2 19.7l51.9 111.3c2.5 5.3 3.8 11.1 3.8 16.9V456c0 30.9-25.1 56-56 56H216c-30.9 0-56-25.1-56-56V267.5c0-5.8 1.3-11.6 3.8-16.9l51.9-111.3c4.1-8.8 10.4-15.8 20.2-19.7l115.2-50.78c11.1-4.47 22.7-4.47 32.9 0l116.1 50.78zM208 269.3V456c0 4.4 3.6 8 8 8h88v-56c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v56h88c4.4 0 8-3.6 8-8V269.3l-49.9-106.9L368 114.2l-110.1 48.2L208 269.3z" />
    </svg>
);

export default SvgFarm;
