import * as React from 'react';
import { SVGProps } from 'react';

const SvgDiceTwo = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M128 128c-17.6 0-32 14.4-32 32s14.38 32 32 32 32-14.38 32-32-14.4-32-32-32zm256-96H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96c0-35.37-28.6-64-64-64zm16 384c0 8.875-7.125 16-16 16H64c-8.875 0-16-7.125-16-16V96c0-8.875 7.125-16 16-16h320c8.875 0 16 7.125 16 16v320zm-80-96c-17.62 0-32 14.38-32 32s14.38 32 32 32 32-14.38 32-32-14.4-32-32-32z" />
    </svg>
);

export default SvgDiceTwo;
