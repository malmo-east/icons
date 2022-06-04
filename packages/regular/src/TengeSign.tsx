import * as React from 'react';
import { SVGProps } from 'react';

const SvgTengeSign = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M0 56c0-13.25 10.75-24 24-24h336c13.3 0 24 10.75 24 24s-10.7 24-24 24H24C10.75 80 0 69.25 0 56zm0 128c0-13.3 10.75-24 24-24h336c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v248c0 13.3-10.7 24-24 24s-24-10.7-24-24V208H24c-13.25 0-24-10.7-24-24z" />
    </svg>
);

export default SvgTengeSign;
