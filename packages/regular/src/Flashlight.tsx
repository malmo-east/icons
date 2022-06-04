import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlashlight = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M607.1 96h-32c-62.63 0-123.7 18.5-175.9 53.25L383.1 160H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h335.1l16.12 10.75C452.2 397.5 513.4 416 575.1 416h32c17.62 0 32-14.38 32-32V128c0-17.6-13.5-32-32-32zM544 365.6c-41.88-4.75-82.13-19.5-117.2-42.87L398.5 304H48v-96h350.5l28.25-18.75A266.851 266.851 0 0 1 544 146.4v219.2zM284 232h-24c-13.25 0-24 10.75-24 24s10.75 24 24 24h24c13.25 0 24-10.75 24-24 0-13.2-10.8-24-24-24z" />
    </svg>
);

export default SvgFlashlight;
