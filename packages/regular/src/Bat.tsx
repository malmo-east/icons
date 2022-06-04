import * as React from 'react';
import { SVGProps } from 'react';

const SvgBat = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="m638.6 287.2-70.4-157.4c-5.375-12.38-17.75-19.5-30.62-19.5-5.75 0-11.75 1.5-17.12 4.625l-104.9 60.37L383.1 64l-58.12 48H314.1l-59-48-30.7 111.2-104.9-60.3c-5.25-3-11.12-4.625-17.12-4.625-12.87 0-25.25 7.125-30.62 19.5L1.375 287.2c-4.875 11 3.879 22.38 15.25 22.38 1.75 0 3.496-.25 5.371-.875L38.5 303.5c6.75-2.25 13.87-3.375 20.1-3.375 21.87 0 42.87 10.38 55.5 28.5L153.4 384l12.37-11.88c12.1-12.5 30.12-18.75 46.1-18.75 20.12 0 40.12 8.75 53.37 25.62L319.1 448l53.87-69c13.25-16.88 33.25-25.62 53.37-25.62 16.87 0 33.1 6.25 46.1 18.75L486.6 384l38.37-55.38c12.62-18.12 33.62-28.5 55.5-28.5 6.1 0 14.12 1.125 20.1 3.375l16.5 5.25c1.875.5 3.625.875 5.375.875C634.7 309.6 643.5 298.2 638.6 287.2zm-153 14-10.12 14.5c-14.1-6.75-31.37-10.38-48.25-10.38-36.12 0-69.37 16.12-91.25 44.13L320 370l-16-20.5c-21.87-28-55.12-44.13-91.25-44.13-16.87 0-33.37 3.625-48.25 10.38l-10.12-14.5c-19.5-28-50.75-45.75-84.1-48.62l39.5-88.5 144.9 83.5 27.42-99.83 14.8 12.2h46.25l14.75-12.25 28.37 99.87 144.9-83.5 39.5 88.5c-34.27 2.88-65.57 20.58-85.07 48.58z" />
    </svg>
);

export default SvgBat;
