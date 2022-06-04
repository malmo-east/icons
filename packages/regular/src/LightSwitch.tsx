import * as React from 'react';
import { SVGProps } from 'react';

const SvgLightSwitch = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M320 0H64C28.62 0 0 28.62 0 64v384c0 35.38 28.62 64 64 64h256c35.38 0 64-28.62 64-64V64c0-35.38-28.6-64-64-64zm16 448c0 8.875-7.125 16-16 16H214.4c-3.3-9.6-12.3-16-22.4-16s-19.12 6.375-22.38 16H64c-8.875 0-16-7.125-16-16V64c0-8.875 7.125-16 16-16h105.6c3.3 9.62 12.3 16 22.4 16s19.12-6.375 22.38-16H320c8.875 0 16 7.125 16 16v384zM240 95.1h-96c-26.4 0-48 21.6-48 47.1v224c0 26.4 21.6 48 48 48h96c26.4 0 48-21.6 48-48v-224c0-24.6-21.6-47.1-48-47.1zm0 272.9h-96v-88h96v88zm0-136h-96v-88h96v88z" />
    </svg>
);

export default SvgLightSwitch;
