import * as React from 'react';
import { SVGProps } from 'react';

const SvgLampFloor = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="m381.1 212.8-71.11-192C306.4 8.375 294.5 0 281.2 0H102.8C89.52 0 77.77 8.375 73.15 20.75l-71.11 192C-5.715 233.6 9.656 256 31.65 256h136.6v208H88c-13.25 0-24 10.7-24 24s10.75 24 24 24h208c13.25 0 24-10.75 24-24 0-13.26-10.75-24-24-24h-80.25V256h136.6c21.95 0 37.35-22.4 28.75-43.2zM54.52 208l59.24-160h156.5l59.24 160H54.52z" />
    </svg>
);

export default SvgLampFloor;
