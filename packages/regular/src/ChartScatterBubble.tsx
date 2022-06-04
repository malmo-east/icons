import * as React from 'react';
import { SVGProps } from 'react';

const SvgChartScatterBubble = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M24 32c13.25 0 24 10.75 24 24v352c0 13.3 10.75 24 24 24h416c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-39.76 0-72-32.2-72-72V56c0-13.25 10.75-24 24-24zm104 272c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm288-16c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm-64-24c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm-160-88c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm256-48c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-35.35 28.7-64 64-64s64 28.65 64 64zm-64-24c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
    </svg>
);

export default SvgChartScatterBubble;
