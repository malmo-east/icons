import * as React from 'react';
import { SVGProps } from 'react';

const SvgEmptySet = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M504.1 7.031c-9.375-9.375-24.56-9.375-33.94 0l-74.59 74.59C358 50.63 309.2 32 256 32 132.3 32 32 132.3 32 256c0 53.21 18.63 102 49.62 140.4L7.03 470.99c-9.375 9.375-9.375 24.56 0 33.94C11.72 509.7 17.84 512 24 512s12.28-2.344 16.97-7.031l74.59-74.59C153.1 461.4 202.8 480 256 480c123.7 0 224-100.3 224-224 0-53.21-18.63-102-49.62-140.4l74.59-74.59c9.33-9.42 9.33-24.6-.87-33.979zM80 256c0-97.05 78.95-176 176-176 39.88 0 76.59 13.49 106.1 35.93l-246.2 246.2C93.49 332.6 80 295.9 80 256zm352 0c0 97.05-78.95 176-176 176-39.88 0-76.59-13.49-106.1-35.93l246.2-246.2C418.5 179.4 432 216.1 432 256z" />
    </svg>
);

export default SvgEmptySet;
