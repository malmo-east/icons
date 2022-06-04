import * as React from 'react';
import { SVGProps } from 'react';

const SvgPaintRoller = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M352 0c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h288zm0 48H64c-8.84 0-16 7.16-16 16v64c0 8.8 7.16 16 16 16h288c8.8 0 16-7.2 16-16V64c0-8.84-7.2-16-16-16zM160 352c0-17.7 14.3-32 32-32h8v-16c0-39.8 32.2-72 72-72h152c22.1 0 40-17.9 40-40v-48c0-10.4-6.7-19.3-16-22.6V72.44c36 3.98 64 34.46 64 71.56v48c0 48.6-39.4 88-88 88H272c-13.3 0-24 10.7-24 24v16h8c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V352z" />
    </svg>
);

export default SvgPaintRoller;
