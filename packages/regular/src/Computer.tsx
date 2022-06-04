import * as React from 'react';
import { SVGProps } from 'react';

const SvgComputer = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M0 320V96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64h-86.7l16 48H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.25 0-24-10.7-24-24s10.75-24 24-24h46.7l16-48H64c-35.35 0-64-28.7-64-64zM384 80H64c-8.84 0-16 7.16-16 16v224c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16zM262.7 432l-16-48h-45.4l-16 48h77.4zM480 80c0-26.51 21.5-48 48-48h64c26.5 0 48 21.49 48 48v352c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V80zm48 32h64V80h-64v32zm0 48v32h64v-32h-64zm32 144c17.7 0 32 14.3 32 32v-96h-64v96c0-17.7 14.3-32 32-32zm-32 128h64v-96c0 17.7-14.3 32-32 32s-32-14.3-32-32v96z" />
    </svg>
);

export default SvgComputer;
