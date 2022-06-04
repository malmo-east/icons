import * as React from 'react';
import { SVGProps } from 'react';

const SvgGameBoard = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M64 96v80h80V96H64zm0 160v80h80v-80H64zM304 96h-80v80h80V96zM144 416h80v-80h-80v80zm240 0v-80h-80v80h80zm-80-160h80v-80h-80v80zm-80-80h-80v80h80v-80zM384 32H64C28.8 32 0 60.8 0 96v320c0 35.2 28.8 64 64 64h320c35.2 0 64-28.8 64-64V96c0-35.2-28.8-64-64-64zm16 384c0 8.674-7.326 16-16 16H64c-8.672 0-16-7.326-16-16V96c0-8.674 7.328-16 16-16h320c8.674 0 16 7.326 16 16v320zm-176-80h80v-80h-80v80z" />
    </svg>
);

export default SvgGameBoard;
