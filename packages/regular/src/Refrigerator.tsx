import * as React from 'react';
import { SVGProps } from 'react';

const SvgRefrigerator = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M288 0H96C42.98 0 0 42.98 0 96v352c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V96c0-53.02-43-96-96-96zm48 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V208h192v136c0 13.25 10.75 24 24 24s24-10.7 24-24V208h48v240zm0-288h-48v-40c0-13.2-10.7-24-24-24s-24 10.8-24 24v40H48V96c0-26.47 21.53-48 48-48h192c26.47 0 48 21.53 48 48v64z" />
    </svg>
);

export default SvgRefrigerator;
