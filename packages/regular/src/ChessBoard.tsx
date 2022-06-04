import * as React from 'react';
import { SVGProps } from 'react';

const SvgChessBoard = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M64 96v64h64V96H64zm192 0h-64v64h64V96zm-64 320h64v-64h-64v64zm-128 0h64v-64H64v64zm0-192v64h64v-64H64zm320 64v-64h-64v64h64zm0 128v-64h-64v64h64zm-64-256h64V96h-64v64zm-64 64h64v-64h-64v64zM384 32H64C28.8 32 0 60.8 0 96v320c0 35.2 28.8 64 64 64h320c35.2 0 64-28.8 64-64V96c0-35.2-28.8-64-64-64zm16 384c0 8.674-7.326 16-16 16H64c-8.672 0-16-7.326-16-16V96c0-8.674 7.328-16 16-16h320c8.674 0 16 7.326 16 16v320zM192 160h-64v64h64v-64zm0 128h64v-64h-64v64zm-64 0v64h64v-64h-64zm128 64h64v-64h-64v64z" />
    </svg>
);

export default SvgChessBoard;
