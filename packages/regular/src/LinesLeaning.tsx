import * as React from 'react';
import { SVGProps } from 'react';

const SvgLinesLeaning = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M360 32c13.3 0 24 10.75 24 24v400c0 13.3-10.7 24-24 24s-24-10.7-24-24V56c0-13.25 10.7-24 24-24zm-91.3.46c13 2.6 21.4 15.25 18.8 28.24l-80 400c-2.6 13-15.2 21.4-28.2 18.8-13-2.6-21.4-15.2-18.8-28.2l80-400.01c2.6-13 15.2-21.43 28.2-18.83zm-92.6.96c12.5 4.49 19 18.24 14.5 30.71L46.58 464.1c-4.49 12.5-18.24 19-30.71 14.5-12.472-4.5-18.942-18.3-14.453-30.7L145.4 47.87c4.5-12.47 18.3-18.94 30.7-14.45z" />
    </svg>
);

export default SvgLinesLeaning;
