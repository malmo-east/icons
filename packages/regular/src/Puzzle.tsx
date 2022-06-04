import * as React from 'react';
import { SVGProps } from 'react';

const SvgPuzzle = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M448 0H336c-17.67 0-32 14.33-32 32v48h32c17.67 0 32 14.33 32 32s-14.33 32-32 32h-32v64h64v16c0 17.67 14.33 32 32 32s32-14.33 32-32v-16h48c17.67 0 32-14.33 32-32V64c0-35.35-28.7-64-64-64zm-32 288h-48v32c0 17.67-14.33 32-32 32s-32-14.33-32-32v-32h-80v64h-32c-17.67 0-32 14.33-32 32s14.33 32 32 32h32v48H72c-13.25 0-24-10.75-24-24V288h48v-32c0-17.67 14.33-32 32-32s32 14.33 32 32v32h64v-80h16c17.67 0 32-14.33 32-32s-14.33-32-32-32h-16V96c0-17.67-14.33-32-32-32H64C28.65 64 0 92.65 0 128v312c0 39.8 32.24 72 72 72h312c35.35 0 64-28.65 64-64V320c0-17.7-14.3-32-32-32z" />
    </svg>
);

export default SvgPuzzle;
