import * as React from 'react';
import { SVGProps } from 'react';

const SvgMugSaucer = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M512 32H112c-8.8 0-16 7.2-16 16l.01 240c0 53.02 42.98 96 96 96h192C437 384 480 341 480 288h26.38c66.83 0 126.6-48.78 133-115.3C646.8 96.38 586.8 32 512 32zm-80 256c0 26.4-21.6 48-48 48H192c-26.4 0-48-21.6-48-48V80h288v208zm80-48h-32V80h32c44.13 0 80 35.88 80 80s-35.9 80-80 80zm40 192H24c-13.25 0-24 10.7-24 24s10.75 24 24 24h528c13.25 0 24-10.75 24-24 0-13.3-10.7-24-24-24z" />
    </svg>
);

export default SvgMugSaucer;
