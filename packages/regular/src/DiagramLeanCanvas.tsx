import * as React from 'react';
import { SVGProps } from 'react';

const SvgDiagramLeanCanvas = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M0 96c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm512 200h80V96c0-8.84-7.2-16-16-16h-64v216zM464 80h-64v88h64V80zm-112 0h-64v216h64V80zm-112 0h-64v88h64V80zm-112 0H64c-8.84 0-16 7.16-16 16v200h80V80zM48 344v72c0 8.8 7.16 16 16 16h232v-88H48zm296 88h232c8.8 0 16-7.2 16-16v-72H344v88zM240 216h-64v80h64v-80zm160 0v80h64v-80h-64z" />
    </svg>
);

export default SvgDiagramLeanCanvas;
