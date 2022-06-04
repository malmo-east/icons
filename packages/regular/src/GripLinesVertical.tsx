import * as React from 'react';
import { SVGProps } from 'react';

const SvgGripLinesVertical = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
        <path d="M56 56v400c0 13.3-10.75 24-24 24S8 469.3 8 456V56c0-13.25 10.75-24 24-24s24 10.75 24 24zm128 0v400c0 13.3-10.7 24-24 24s-24-10.7-24-24V56c0-13.25 10.7-24 24-24s24 10.75 24 24z" />
    </svg>
);

export default SvgGripLinesVertical;
