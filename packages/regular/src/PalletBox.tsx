import * as React from 'react';
import { SVGProps } from 'react';

const SvgPalletBox = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M192 288h256c35.35 0 64-28.65 64-64V64c0-35.35-28.65-64-64-64H192c-35.3 0-64 28.65-64 64v160c0 35.3 28.7 64 64 64zM176 64c0-8.822 7.178-16 16-16h64v79.1l64-32 64 32V48h64c8.822 0 16 7.178 16 16v160c0 8.822-7.178 16-16 16H192c-8.8 0-16-7.2-16-16V64zm440 400h-48v-96h48c13.25 0 24-10.75 24-24s-10.7-24-24-24H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h48v96H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h592c13.25 0 24-10.75 24-24s-10.7-24-24-24zm-320 0H120v-96h176v96zm224 0H344v-96h176v96z" />
    </svg>
);

export default SvgPalletBox;
