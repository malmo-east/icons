import * as React from 'react';
import { SVGProps } from 'react';

const SvgToiletPortable = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
        <path d="M48 480v8c0 13.3-10.75 24-24 24S0 501.3 0 488V72C0 32.24 32.24 0 72 0h176c39.8 0 72 32.24 72 72v416c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48zm0-384h224V72c0-13.25-10.7-24-24-24H72c-13.25 0-24 10.75-24 24v24zm0 48v288h224V320h-24c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h24v-80H48z" />
    </svg>
);

export default SvgToiletPortable;
