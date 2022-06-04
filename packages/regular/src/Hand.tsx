import * as React from 'react';
import { SVGProps } from 'react';

const SvgHand = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M408 80c-3.994 0-7.91.326-11.73.955-9.586-28.51-36.57-49.11-68.27-49.11a71.9 71.9 0 0 0-18.68 2.457C296.6 13.73 273.9 0 248 0s-48.7 13.79-61.4 34.44c-5.9-1.59-12.1-2.44-18.5-2.44-39.7 0-72.09 32.3-72.09 72v121.6c-5.24-1-10.6-1.6-16-1.6-.003 0 .003 0 0 0C36.43 224 0 259.2 0 304.1c0 20.29 7.558 39.52 21.46 54.45l81.25 87.24C141.9 487.9 197.4 512 254.9 512h33.08C393.9 512 480 425.9 480 320V152c0-39.7-32.3-72-72-72zm24 240c0 79.41-64.59 144-143.1 144h-34c-44.41 0-86.83-18.46-117.1-50.96l-79.76-85.63c-6.202-6.659-9.406-15.4-9.406-23.1 0-22.16 18.53-31.4 31.35-31.4 8.56 0 17.1 3.416 23.42 10.18l26.72 28.69c1.676.92 3.776 1.62 5.776 1.62 4.106 0 8.064-3.172 8.064-8.016V104c0-13.25 10.75-24 23.1-24 13.25 0 23.1 10.75 23.1 24v152C192 264.8 199.2 272 208 272s15.1-7.163 15.1-15.1L224 72c0-13.25 10.75-24 23.1-24 13.25 0 23.1 10.75 23.1 24v184c1.8 8.8 9 16 17.8 16s15.99-7.164 15.99-15.1l.008-152.2c0-13.25 10.75-24 23.1-24 13.25 0 23.1 10.75 23.1 24v152.2C352 264.8 359.2 272 368 272s15.1-7.163 15.1-15.1V152c0-13.25 10.75-24 23.1-24 13.25 0 23.1 10.75 23.1 24v168z" />
    </svg>
);

export default SvgHand;
