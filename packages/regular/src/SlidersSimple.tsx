import * as React from 'react';
import { SVGProps } from 'react';

const SvgSlidersSimple = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M488 344c13.3 0 24 10.7 24 24s-10.7 24-24 24H156.3c-10.2 32.5-40.5 56-76.3 56-44.18 0-80-35.8-80-80s35.82-80 80-80c35.8 0 66.1 23.5 76.3 56H488zM48 368c0 17.7 14.33 32 32 32s32-14.3 32-32-14.33-32-32-32-32 14.3-32 32zm307.7-248c10.2-32.46 40.5-56 76.3-56 44.2 0 80 35.82 80 80 0 44.2-35.8 80-80 80-35.8 0-66.1-23.5-76.3-56H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h331.7zm76.3 56c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
    </svg>
);

export default SvgSlidersSimple;
