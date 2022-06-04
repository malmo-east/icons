import * as React from 'react';
import { SVGProps } from 'react';

const SvgPipe = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 512" {...props}>
        <path d="M32 512c-13.25 0-24-10.75-24-24V24C8 10.75 18.75 0 32 0s24 10.75 24 24v464c0 13.3-10.75 24-24 24z" />
    </svg>
);

export default SvgPipe;
