import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareEnvelope = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M224 288c-2.9 0-4.9-.4-5.9-1.1L96 238v82c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32v-82l-122.1 48.82c-1.9.78-3.9 1.18-5.9 1.18zm96-128H128c-17.7 0-32 14.3-32 32v11.57l128 51.2 128-51.2V192c0-17.7-14.3-32-32-32zm64-128H64C28.8 32 0 60.8 0 96v320c0 35.2 28.8 64 64 64h320c35.2 0 64-28.8 64-64V96c0-35.2-28.8-64-64-64zm16 384c0 8.674-7.326 16-16 16H64c-8.672 0-16-7.326-16-16V96c0-8.674 7.328-16 16-16h320c8.674 0 16 7.326 16 16v320z" />
    </svg>
);

export default SvgSquareEnvelope;
