import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleO = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M256 128c-70.6 0-128 57.4-128 128s57.42 128 128 128 128-57.42 128-128-57.4-128-128-128zm0 208c-44.11 0-80-35.89-80-80s35.9-80 80-80 80 35.89 80 80-35.9 80-80 80zm0-336C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
    </svg>
);

export default SvgCircleO;
