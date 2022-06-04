import * as React from 'react';
import { SVGProps } from 'react';

const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M40 48h24v192c0 88.22 71.78 160 160 160s160-71.78 160-160V48h24c13.25 0 24-10.75 24-24S421.3 0 408 0h-96c-13.2 0-24 10.75-24 24s10.75 24 24 24h24v192c0 61.75-50.25 112-112 112s-112-50.2-112-112V48h24c13.3 0 24-10.75 24-24S149.3 0 136 0H40C26.75 0 16 10.75 16 24s10.75 24 24 24zm384 416H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h400c13.25 0 24-10.75 24-24s-10.7-24-24-24z" />
    </svg>
);

export default SvgUnderline;
