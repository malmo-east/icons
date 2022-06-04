import * as React from 'react';
import { SVGProps } from 'react';

const SvgFileZipper = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="m365.3 93.38-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.006 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6c0-16.9-6.7-33.2-18.7-45.22zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h48V64h64V48.13h48.01L224 128c0 17.67 14.33 32 32 32h79.1v288zM176 96h-64v32h64V96zm0 64h-64v32h64v-32zm0 64h-64L81.44 340.5c-7.93 39 22.26 75.5 62.86 75.5 40.26 0 70.45-36.3 62.68-75.15L176 224zm-16 144h-32c-8.836 0-16-7.164-16-16s7.164-16 16-16h32c8.836 0 16 7.164 16 16s-7.2 16-16 16z" />
    </svg>
);

export default SvgFileZipper;
