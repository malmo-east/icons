import * as React from 'react';
import { SVGProps } from 'react';

const SvgDiagramSankey = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M329.9 80c-2.7 0-5.3 1.45-6.8 3.83L253.8 197.2c-10.1 16.6-28.2 26.8-47.7 26.8H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h182.1c2.7 0 5.3-1.5 6.8-3.8l69.3-113.4C292.3 42.15 310.4 32 329.9 32H552c13.3 0 24 10.75 24 24s-10.7 24-24 24H329.9zm-124 240 61.7 107.1c1.4 3.4 4.1 4.9 7 4.9H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H274.6c-20.1 0-38.7-10.8-48.7-28.2L150.6 320H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h528c13.3 0 24 10.7 24 24s-10.7 24-24 24H205.9z" />
    </svg>
);

export default SvgDiagramSankey;
