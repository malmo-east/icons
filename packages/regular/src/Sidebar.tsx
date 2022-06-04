import * as React from 'react';
import { SVGProps } from 'react';

const SvgSidebar = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm224 336h224c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16H224v352zM88 144h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88c-13.25 0-24 10.7-24 24s10.75 24 24 24zm0 48c-13.25 0-24 10.7-24 24s10.75 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88zm0 144h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H88c-13.25 0-24 10.7-24 24s10.75 24 24 24z" />
    </svg>
);

export default SvgSidebar;
