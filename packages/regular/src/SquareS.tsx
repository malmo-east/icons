import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareS = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v320zM230.4 232.9c-49.9-13.8-56.7-20.5-53.9-36.3 1.031-5.688 4.156-10.27 9.344-13.61 8.594-5.547 30.84-12.88 83.63.578 12.81 3.297 25.94-4.469 29.19-17.31 3.281-12.84-4.469-25.92-17.31-29.19-53.66-13.69-94.47-11.81-121.5 5.562C143.5 153.2 132.7 169.4 129.3 188.2c-11.28 63.38 48.66 80 88.31 91 49.94 13.86 56.69 20.53 53.88 36.31-1.312 7.312-4.344 11.81-10.12 15.06-18.09 10.09-58.5 5.844-100.6-10.7-12.22-4.75-26.28 1.188-31.12 13.58-4.844 12.33 1.219 26.27 13.56 31.11 18.31 7.172 54.88 19.48 90.63 19.48 18 0 35.78-3.109 50.94-11.58 18.38-10.28 30.09-27.06 33.94-48.53 10.38-63.33-48.62-80.03-88.32-91.03z" />
    </svg>
);

export default SvgSquareS;
