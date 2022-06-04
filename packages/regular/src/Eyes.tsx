import * as React from 'react';
import { SVGProps } from 'react';

const SvgEyes = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <path d="M468 32c-62.9 0-117.9 44.34-147.9 110.1-10.8-23.89-24.89-45.37-42.23-62.99C247.5 48.31 210.9 32 172 32 77.16 32 0 132.5 0 256s77.16 224 172 224c62.1 0 118-44.48 148-110.4C349.1 435.5 405 480 468 480c94.8 0 172-100.5 172-224S562.8 32 468 32zM172 432c-45.95 0-86.05-35.75-107.5-88.59 9.36 5.29 20 8.59 31.5 8.59 35.35 0 64-28.65 64-64s-28.7-64-64-64c-19.02 0-35.91 8.5-47.63 21.6C52.19 153.4 106.1 80 172 80c25.75 0 50.53 11.34 71.72 32.84C276.4 146.1 296 199.6 296 256c0 97-55.6 176-124 176zm296 0c-44.59 0-83.64-33.7-105.5-83.97 6.8 2.37 13.9 3.97 21.5 3.97 35.35 0 64-28.65 64-64s-28.65-64-64-64c-14.91 0-28.46 5.312-39.34 13.87C351.1 149.3 403.9 80 468 80c68.4 0 124 78.1 124 176s-55.6 176-124 176z" />
    </svg>
);

export default SvgEyes;
