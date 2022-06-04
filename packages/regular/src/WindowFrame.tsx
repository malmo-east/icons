import * as React from 'react';
import { SVGProps } from 'react';

const SvgWindowFrame = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M488 464h-8V32c0-17.6-14.4-32-32-32H64C46.4 0 32 14.4 32 32v432h-8.9C10.75 464 0 474.7 0 487.1S10.75 512 23.1 512H488c13.25 0 24-10.75 24-23.1S501.3 464 488 464zm-256 0H80V272h152v192zm0-240H80V48h152v176zm200 240H280V272h152v192zm0-240H280V48h152v176z" />
    </svg>
);

export default SvgWindowFrame;
