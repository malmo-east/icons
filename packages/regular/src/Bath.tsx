import * as React from 'react';
import { SVGProps } from 'react';

const SvgBath = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M488 256.1H80V69.36c0-8.623 5.25-16.37 13.12-19.62 8-3.25 17.12-1.5 23.12 4.623l3.162 3.162C106.4 84.63 110.9 117.1 133.4 140.5l14.84 14.85c-5.936 9.285-5.281 21.56 2.834 29.67C155.7 189.7 161.9 192 168 192s12.28-2.344 16.97-7.031l96-96c9.375-9.375 9.375-24.56 0-33.94-4.562-4.562-10.44-6.768-16.36-6.766-4.609 0-9.246 1.334-13.31 3.932L236.5 37.35c-23.4-22.49-56-26.93-83.1-13.86l-1.5-1.48C136.4 6.529 114.8-2.289 93.04.516 57.11 5.158 32 35.21 32 69.36v186.7l-8 .04c-13.25 0-24 10.71-24 23.96s10.75 24.02 24 24.02h8v79.96c0 27.12 11.75 52.97 32 71.09v32.9C64 501.3 74.75 512 88 512s24-10.74 24-23.99v-9.623c5.25 1 10.62 1.495 16 1.62h256c5.375-.125 10.75-.62 16-1.62v9.623c0 13.29 10.7 23.99 24 23.99s24-10.7 24-24v-32.9c20.25-18.12 32-43.97 32-71.09V304.1h8c13.25 0 24-10.77 24-24.02s-10.7-23.98-24-23.98zM202.5 71.29l14.13 14.13-35.23 35.18-14.1-14.1c-9.7-9.7-9.7-25.5 0-35.21 9.7-9.72 25.5-9.74 35.2 0zM432 384c0 26.49-21.5 47.99-48 47.99H128c-26.5 0-48-21.49-48-47.99v-79.9h352V384z" />
    </svg>
);

export default SvgBath;
