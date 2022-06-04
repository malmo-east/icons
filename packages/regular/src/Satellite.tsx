import * as React from 'react';
import { SVGProps } from 'react';

const SvgSatellite = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="m502.8 264.1-63.04-63.08 23.92-23.95c21.83-21.87 21.83-57.41 0-79.28L412.9 47.88c-21.13-21.12-58.02-21.21-79.21 0L309.7 71.86 247.11 9.25C241 3.375 232.9 0 224.5 0 216 0 207.88 3.375 202 9.25L105.25 106c-12.38 12.5-12.38 32.62 0 45.12l62.69 62.67-.54.51c-15.4-4.2-31.5-6.6-48.3-6.6-39.66 0-77.46 12.39-109.3 35.79A23.904 23.904 0 0 0 .068 261c-.53 6.1 2.018 13.9 6.971 18.8l95.49 95.6-47.49 47.54c-9.375 9.387-9.375 24.59 0 33.98 9.377 9.391 24.56 9.391 33.94 0l47.49-47.54 95.49 95.6c4.953 4.973 11.73 7.32 18.8 6.977a24.05 24.05 0 0 0 17.52-9.734c23.39-31.91 35.75-69.74 35.75-109.4 0-16.77-2.439-32.95-6.633-48.4l.578-.582 62.91 62.93c12.5 12.38 32.62 12.38 44.1 0l96.75-96.75C508.6 304.1 512 295.1 512 287.5c0-8.4-3.4-17.4-9.2-23.4zM150.6 128.5l73.87-73.75 51.19 51.17-73.76 73.88-51.3-51.3zM244 449.1 62.87 267.7c17.52-7.9 36.57-12 56.23-12 75.49 0 136.9 61.48 136.9 137.1 0 19.7-4.1 38.8-12 56.3zm-29.1-214.4L367.6 81.8c4.094-4.066 7.219-4.066 11.31 0l50.75 50.81c3.109 3.129 3.109 8.195 0 11.33l-152.7 152.9C261.5 271.5 240.2 250.2 214.9 234.7zm168.6 126.7-51.55-51.57 73.76-73.84 51.54 51.54-73.75 73.87z" />
    </svg>
);

export default SvgSatellite;
