import * as React from 'react';
import { SVGProps } from 'react';

const SvgMegaphone = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M576 55.1V456c0 13.3-10.7 24-24 24s-24-10.7-24-24v-5.7l-177.7-48.4c-9.2 44.5-47.4 78.1-94.3 78.1-53.9 0-96-43-96-96 0-11.4 1.1-22.3 5.6-32.5L48 319.4v8.6c0 13.3-10.75 24-24 24S0 341.3 0 328V184c0-13.3 10.75-24 24-24s24 10.7 24 24v8.6L528 61.67V56c0-13.25 10.7-24 24-24s24 10.75 24 24v-.9zm-48 345.5V111.4L48 242.3v27.4l480 130.9zM256 432c24.8 0 45.1-18.8 47.7-42.8l-91.4-25c-2.8 6-4.3 12.7-4.3 19.8 0 26.5 21.5 48 48 48z" />
    </svg>
);

export default SvgMegaphone;
