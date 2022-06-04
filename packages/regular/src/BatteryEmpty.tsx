import * as React from 'react';
import { SVGProps } from 'react';

const SvgBatteryEmpty = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M464 96c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V176c0-44.2 35.82-80 80-80h384zM48 336c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32H80c-17.67 0-32 14.3-32 32v160z" />
    </svg>
);

export default SvgBatteryEmpty;
