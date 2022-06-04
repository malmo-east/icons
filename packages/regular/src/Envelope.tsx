import * as React from 'react';
import { SVGProps } from 'react';

const SvgEnvelope = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M0 128c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm48 0v22.1l172.5 141.6c20.6 17 50.4 17 71 0L464 150.1v-23c0-7.9-7.2-16-16-16H64c-8.84 0-16 8.1-16 16v.9zm0 84.2V384c0 8.8 7.16 16 16 16h384c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.6 31.5-132.9 0L48 212.2z" />
    </svg>
);

export default SvgEnvelope;
