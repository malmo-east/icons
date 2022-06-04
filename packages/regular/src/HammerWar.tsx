import * as React from 'react';
import { SVGProps } from 'react';

const SvgHammerWar = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M352.1 32.02c-3.875 0 5.013-1.268-136.1 22.23V23.1C216 10.75 205.3 0 192 0s-24 10.75-24 23.1v31.15C26.25 30.62 35.76 32.02 31.89 32.02 14.64 32.02 0 46 0 64v192c0 18 14.6 31.98 31.97 31.98 3.75 0-5.096 1.268 136-22.23v222.3C168 501.3 178.7 512 192 512s24-10.75 24-23.1V265.8c141.8 23.62 132.3 22.23 136.1 22.23 17.38 0 31.93-13.98 31.93-31.98V64C384 46 369.4 32.02 352.1 32.02zM336 237.1l-144-24-144 24V82.88l144 24 144-24V237.1z" />
    </svg>
);

export default SvgHammerWar;
