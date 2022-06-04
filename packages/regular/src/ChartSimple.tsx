import * as React from 'react';
import { SVGProps } from 'react';

const SvgChartSimple = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M240 32c26.5 0 48 21.49 48 48v352c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V80c0-26.51 21.5-48 48-48h32zm0 48h-32v352h32V80zM80 224c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V272c0-26.5 21.49-48 48-48h32zm0 48H48v160h32V272zm240-128c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V144zm48 288h32V144h-32v288z" />
    </svg>
);

export default SvgChartSimple;
