import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleArrowRight = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M280.3 134.4c-9.719-9-24.91-8.438-33.94 1.25-9 9.719-8.469 24.88 1.25 33.94L314.9 232H144c-13.2 0-24 10.8-24 24s10.8 24 24 24h170.9l-67.21 62.41c-9.719 9.062-10.25 24.22-1.25 33.94 9.031 9.688 24.22 10.25 33.94 1.25l112-104C397.2 269 400 262.7 400 256s-2.781-13.03-7.656-17.59L280.3 134.4zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
    </svg>
);

export default SvgCircleArrowRight;
