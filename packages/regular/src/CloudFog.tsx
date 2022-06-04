import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloudFog = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M200 464H87.1C74.8 464 64 474.8 64 487.1S74.8 512 87.1 512H200c13.2 0 24-10.8 24-24s-10.8-24-24-24zm416 0H295.1c-12.3 0-23.1 10.8-23.1 23.1s10.8 24.9 23.1 24.9H616c13.2 0 24-10.8 24-23.1S629.2 464 616 464zm-40-64c0-13.2-10.8-24-24-24H24c-13.2 0-24 10.8-24 23.1C0 413.2 10.8 424 23.1 424h528c14.1 0 24.9-10.8 24.9-24zm-404-80h296c59.6 0 108-48.5 108-108 0-57.25-44.88-104.2-101.2-107.8C461.2 61.75 421.1 32 376 32c-13.5 0-26.75 2.625-39.25 7.75C314.2 14.5 282.4 0 248 0c-64 0-116.4 50.25-119.8 113.4C89.62 130.4 64 168.5 64 212c0 59.5 48.4 108 108 108zm-13.6-166.2 20.8-4.9-2.8-24.9c-.2-1.2-.4-2.6-.4-4 0-39.75 32.25-72 72-72 25.25 0 48.25 13.12 61.38 35.12l13.38 22.12 21-15C353.4 83.62 364.5 80 376 80c28.62 0 52.38 21.75 55.25 50.38L433.5 152H468c33.13 0 60 26.88 60 60s-26.9 60-60 60H172c-33.1 0-60-26.9-60-60 0-28 19.1-52 46.4-58.2z" />
    </svg>
);

export default SvgCloudFog;
