import * as React from 'react';
import { SVGProps } from 'react';

const SvgBringFront = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M48 64v128c0 8.8 7.16 16 16 16h64v48H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h128c35.3 0 64 28.65 64 64h-48c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16zm400 448c-35.3 0-64-28.7-64-64h48c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16V320c0-8.8-7.2-16-16-16h-64v-48h64c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H448zM416 96c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h192z" />
    </svg>
);

export default SvgBringFront;
