import * as React from 'react';
import { SVGProps } from 'react';

const SvgTemperatureQuarter = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
        <path d="M272 112C272 50.12 221.88 0 160.9 0S48 50.13 48 112v166.5C28.25 303.12 16 334 16 368c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368c0-33.1-12.25-64.88-32-89.5V112zM160 464c-52.88 0-96-43.13-96-96 0-27 11.75-47.25 21.5-59.5L96 295.4V112c0-35.25 28.75-64 64-64s64 28.75 64 64v183.2l10.5 13.13C244.3 320.8 256 341 256 368c0 52.9-43.1 96-96 96zm16-141.1v-50.88c0-8.75-7.25-16-16-16s-15.1 7.25-15.1 16l-.9 50.88c-18.62 6.625-32 24.25-32 45.13 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.93-13.4-38.53-32-45.13z" />
    </svg>
);

export default SvgTemperatureQuarter;
