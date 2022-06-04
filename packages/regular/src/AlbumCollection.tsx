import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlbumCollection = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M456 0c13.3 0 24 10.75 24 24s-10.7 24-24 24H56c-13.25 0-24-10.75-24-24S42.75 0 56 0h400zm-48 336c0 57.4-66.3 104-148 104s-148-46.6-148-104 66.3-104 148-104 148 46.6 148 104zm-152 32c17.7 0 32-10.7 32-24s-14.3-24-32-24-32 10.7-32 24 14.3 24 32 24zM6.155 232.3C1.111 194 30.95 160 69.61 160H442.4c38.7 0 68.5 34 63.4 72.3l-29.4 224c-4.2 31.9-31.4 55.7-63.5 55.7H99.08c-32.12 0-59.26-23.8-63.45-55.7l-29.475-224zM69.61 208c-9.67 0-17.13 8.5-15.87 18.1l29.48 224c1.05 7.9 7.83 13.9 15.86 13.9H412.9c8 0 14.8-6 15.9-13.9l29.5-224c1.2-9.6-6.2-18.1-15.9-18.1H69.61zM16 104c0-13.25 10.75-24 24-24h432c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H40c-13.25 0-24-10.7-24-24z" />
    </svg>
);

export default SvgAlbumCollection;
