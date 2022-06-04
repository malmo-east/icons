import * as React from 'react';
import { SVGProps } from 'react';

const SvgUp = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M2.438 252.3C7.391 264.2 19.06 272 32 272h80v160c0 26.51 21.49 48 48 48h64c26.5 0 48-21.5 48-48V272h80a32 32 0 0 0 22.622-54.63l-160-176C208.4 35.13 200.2 32 192 32s-16.4 3.13-22.6 9.38l-160 176C.219 226.5-2.516 240.3 2.438 252.3zM192 86.63 313.4 224H224v208h-64V224H70.63L192 86.63z" />
    </svg>
);

export default SvgUp;
