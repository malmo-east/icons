import * as React from 'react';
import { SVGProps } from 'react';

const SvgCoffinCross = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M374.5 115.3 266.7 9.4C260.6 3.375 252.3 0 243.6 0H140.3c-8.6 0-16.9 3.375-23.1 9.375L9.4 115.275c-8.002 7.875-11.25 19.38-8.502 30.38l87.14 342.1C91.73 502 104.7 512 119.7 512h144.7c14.88 0 27.88-9.1 31.51-24.25l87.14-342.1c2.75-11.05-.55-22.55-8.55-30.35zM252.5 464h-121L49.86 142.9 146.5 48h91.02l96.64 94.88L252.5 464zM216 120c0-13.3-10.7-24-24-24s-24.9 10.7-24.9 24v40h-48c-13.25 0-23.1 10.74-23.1 23.1s10.7 24.9 23.1 24.9h48.02v119.1c-.02 14.2 11.58 24.9 23.98 24.9 13.26 0 24.01-10.75 24.01-24V208h48.01c13.26 0 24-10.75 24-24 .88-13.3-9.82-24-23.12-24h-48.02v-40z" />
    </svg>
);

export default SvgCoffinCross;
