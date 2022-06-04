import * as React from 'react';
import { SVGProps } from 'react';

const SvgRabbit = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="m500.4 421.9-96-120.7c43.38-10.5 75.63-49.37 75.63-95.62 0-48-32.75-74.38-42.88-80.1C458.4 17.12 401 0 378.9 0c-16.88 0-31.13 6.875-42.88 17.38C324.3 6.875 310.1 0 293.2 0c-25.88 0-86.19 22.88-53.69 144 .875 3.75 2 7.5 3.25 11.25-2.26 9.15-2.76 17.55-2.76 23.35v35c-63.1 14.9-114.6 59.2-140.87 117-6.25-1.5-12.5-2.6-19.13-2.6-44.25 0-80 35.75-80 80s35.75 80 80 80c7.125 0 13.88-1.25 20.5-3 14.6 16.4 35.8 27 59.5 27h160c21 0 38.87-13.5 45.37-32.38l7.75 9.5C383.8 503.5 400.3 512 418.3 512h37.75c20.38 0 39.13-11 49-28.88 11.25-20.22 8.35-44.92-4.65-61.22zm-419.65 18c-.25 0-.5.125-.75.125-8.25 0-16.38-3.125-22.63-9.375-12.5-12.5-12.5-32.75 0-45.25 12.38-12.38 25.88-8.75 26.63-8.625-.62 3.125-6.37 31.025-3.25 63.125zM456 464h-37.75c-2.75 0-5.25-1.375-6.75-3.75L341 373.5 224 432h64c17.63 0 32 14.38 32 32H160c-17.63 0-32-14.38-32-32v-16c0-88.38 71.63-159.1 160-159.1l-.007-77.38c0-9.75 2.375-17 5.5-23.62-2.75-7.25-5.5-15-7.75-23.38-11.25-42.25-9-79.5 5-83.38 13.88-3.625 33.88 26.38 45.25 67.13 11.5-40.88 31.5-70.75 45.25-67.13 14 3.875 16.25 41.13 5 83.38-1.5 5.375-3 10.5-4.75 15.38l29.13 17.62c13.5 9.5 21.38 24.75 21.38 41C432 233.5 409.3 256 381 256h-29v56.5l110.8 139.3c3.3 5.3-.5 12.2-6.8 12.2zm-88.9-272.9c0-8.875-7.125-16-16-16s-16 7.125-16 16 7.126 16 16 16 16-6.2 16-16z" />
    </svg>
);

export default SvgRabbit;
