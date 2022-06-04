import * as React from 'react';
import { SVGProps } from 'react';

const SvgArchway = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M0 56c0-13.25 10.75-24 24-24h456c13.3 0 24 10.75 24 24s-10.7 24-24 24v352h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H336V336c0-44.2-35.8-80-80-80s-80 35.8-80 80v144H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h8V80h-8C10.75 80 0 69.25 0 56zm80 56h352V80H80v32zm0 48v272h48v-96c0-70.7 57.3-128 128-128s128 57.3 128 128v96h48V160H80z" />
    </svg>
);

export default SvgArchway;
