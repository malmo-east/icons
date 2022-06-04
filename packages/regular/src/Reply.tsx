import * as React from 'react';
import { SVGProps } from 'react';

const SvgReply = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M512 336v119.1c0 14.2-10.7 24.9-24 24.9s-24-10.75-24-23.1V337.8c0-57.34-46.66-103.1-104-103.1H88.51l127.2 109.8c10.03 8.656 11.12 23.81 2.469 33.84C213.4 381.2 206.7 384 200 384c-5.562 0-11.16-1.909-15.69-5.847l-176-151.1C3.029 221.6 0 214.1 0 208c0-7 3.029-13.6 8.31-18.1l176-151.1c9.1-8.718 25.16-7.575 33.85 2.487 8.656 10.03 7.562 25.19-2.469 33.84L88.51 184H360c83.8 0 152 68.2 152 152z" />
    </svg>
);

export default SvgReply;
