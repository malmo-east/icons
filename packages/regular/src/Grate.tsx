import * as React from 'react';
import { SVGProps } from 'react';

const SvgGrate = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 64v136h-56V80h40c8.8 0 16 7.18 16 16zM200 280v152h-48V280h48zm-48-48V80h48v152h-48zm96 48h48v152h-48V280zm0-48V80h48v152h-48zM64 80h40v152H48V96c0-8.82 7.18-16 16-16zM48 416V280h56v152H64c-8.82 0-16-7.2-16-16zm336 16h-40V280h56v136c0 8.8-7.2 16-16 16z" />
    </svg>
);

export default SvgGrate;
