import * as React from 'react';
import { SVGProps } from 'react';

const SvgBackward = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M223.8 64c-7.002 0-14.15 2.305-20.29 7.406L11.44 231.4c-15.25 12.87-15.25 36.37 0 49.24l192 159.1c6.16 5.96 13.36 8.26 20.36 8.26 16.5 0 32.22-12.81 32.22-32.03V96.07C255.1 76.81 240.3 64 223.8 64zm-16.7 317.9L56.88 256l151.1-125.9v251.8zM495.4 67.95c-10.25-5.625-22.69-5.172-32.53 1.062l-163.7 104.2c-11.19 7.109-14.5 21.95-7.375 33.14 7.094 11.19 21.94 14.48 33.13 7.359L464 125.2v261.7l-139.1-88.52c-11.19-7.125-26.03-3.828-33.13 7.359-7.125 11.19-3.812 26.03 7.375 33.14l163.7 104.2c5.219 3.344 11.11 5.023 17.08 5.023 5.281 0 10.7-1.32 15.48-3.945C505.6 438.4 512 427.7 512 415.1V96.03c0-11.69-6.4-22.45-16.6-28.08z" />
    </svg>
);

export default SvgBackward;
