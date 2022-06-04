import * as React from 'react';
import { SVGProps } from 'react';

const SvgDownFromLine = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M314.9 240H272v-64c0-26.51-21.49-47.95-48-47.95h-64c-26.51 0-48 21.44-48 47.95v64H68.71c-41.63 0-63.52 49.37-35.58 80.23l136.2 150.4C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l135.9-150.4C378.4 289.3 356.5 240 314.9 240zM192 425.4 70.63 288H160V176h64v112h89.37L192 425.4zM360 32H24C10.75 32 0 42.75 0 56s10.75 24 24 24h336c13.3 0 24-10.75 24-24s-10.7-24-24-24z" />
    </svg>
);

export default SvgDownFromLine;
