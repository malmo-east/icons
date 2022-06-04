import * as React from 'react';
import { SVGProps } from 'react';

const SvgMessageMinus = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.836 11.02 15.55 19.12 9.7l124.88-91h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm16 352c0 8.75-7.25 16-16 16H288l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16v288zM336 184H176c-13.3 0-24 10.7-24 24 0 13.26 10.73 23.1 23.1 23.1h160c14.2 0 24.9-9.8 24.9-23.1s-10.7-24-24-24z" />
    </svg>
);

export default SvgMessageMinus;
