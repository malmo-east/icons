import * as React from 'react';
import { SVGProps } from 'react';

const SvgDiagramProject = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M136 32c30.9 0 56 25.07 56 56v16h192V88c0-30.93 25.1-56 56-56h80c30.9 0 56 25.07 56 56v80c0 30.9-25.1 56-56 56h-80c-30.9 0-56-25.1-56-56v-16H192v16c0 7.5-1.5 14.6-4.1 21.2l75.9 101.2c5.1-1.6 10.6-2.4 16.2-2.4h80c30.9 0 56 25.1 56 56v80c0 30.9-25.1 56-56 56h-80c-30.9 0-56-25.1-56-56v-80c0-7.5 1.5-14.6 4.1-21.2l-75.9-101.2c-5.1 1.6-10.6 2.4-16.2 2.4H56c-30.93 0-56-25.1-56-56V88c0-30.93 25.07-56 56-56h80zm0 48H56c-4.42 0-8 3.58-8 8v80c0 4.4 3.58 8 8 8h80c4.4 0 8-3.6 8-8V88c0-4.42-3.6-8-8-8zm224 256h-80c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zm72-248v80c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V88c0-4.42-3.6-8-8-8h-80c-4.4 0-8 3.58-8 8z" />
    </svg>
);

export default SvgDiagramProject;
