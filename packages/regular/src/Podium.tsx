import * as React from 'react';
import { SVGProps } from 'react';

const SvgPodium = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M323.2 464H124.8L90.54 224H42.03l38.2 267.4C81.94 503.2 92.06 512 104 512h240c11.94 0 22.06-8.781 23.77-20.59L405.1 224h-48.5l-33.4 240zM424 143.1l-296 .9v-8c0-34.83 24.88-63.95 57.8-70.56C193.1 74.15 203.7 80 216 80h80c22.09 0 40-17.91 40-40S318.1 0 296 0h-80c-13.6 0-25.1 7.246-32.3 17.65C125.3 25.69 80 75.42 80 136v8l-56.9-.9c-12.35 0-23.1 11.6-23.1 24s10.75 24 23.1 24h400c13.25 0 24-10.75 24-24s-9.8-24-23.1-24z" />
    </svg>
);

export default SvgPodium;
