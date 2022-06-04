import * as React from 'react';
import { SVGProps } from 'react';

const SvgBriefcase = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M448 96h-64V64c0-35.35-28.65-64-64-64H192c-35.3 0-64 28.65-64 64v32H64c-35.35 0-64 28.7-64 64v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160c0-35.3-28.7-64-64-64zM192 48h128c8.837 0 16 7.163 16 16v32H176V64c0-8.84 7.2-16 16-16zM64 144h384c8.8 0 16 7.2 16 16v96H48v-96c0-8.8 7.2-16 16-16zm384 288H64c-8.8 0-16-7.2-16-16V304h144v16c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-16h144v112c0 8.8-7.2 16-16 16z" />
    </svg>
);

export default SvgBriefcase;
