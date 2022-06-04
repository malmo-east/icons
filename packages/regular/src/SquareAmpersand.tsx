import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareAmpersand = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v320zM299.5 315.3l28.15-41.31c7.469-10.95 4.625-25.89-6.312-33.34-10.97-7.484-25.88-4.609-33.38 6.312l-21.76 31.93-29.74-32.53 19.69-15.89c13.59-11 21.41-27.36 21.41-44.86C277.6 153.9 251.7 128 219.9 128h-23.1c-31.8 0-57.7 25.9-57.7 57.7a65.29 65.29 0 0 0 17.12 44.14l10.34 11.33-29.76 24.03c-15.7 12.7-24.8 31.7-24.8 52 0 36.8 29.1 66.8 66.8 66.8h32.47c23.41 0 45.38-10.41 60.16-28.19l18.62 20.38c4.75 5.21 11.25 7.81 17.75 7.81a23.94 23.94 0 0 0 16.19-6.281c9.781-8.953 10.47-24.12 1.531-33.91L299.5 315.3zM196.8 176h23.12c5.312 0 9.656 4.328 9.656 9.656a9.593 9.593 0 0 1-3.594 7.516L204 210.9l-12.3-13.5c-2.9-3.2-4.6-7.4-4.6-11.7 0-5.4 4.4-9.7 9.7-9.7zm39.5 146.8c-5.6 8.3-15 13.2-25 13.2h-32.5c-10.3 0-18.8-8.5-18.8-18.8 0-5.719 2.531-11.06 7-14.64l32.1-25.96 39.37 43.08-2.17 3.12z" />
    </svg>
);

export default SvgSquareAmpersand;
