import * as React from 'react';
import { SVGProps } from 'react';

const SvgMeter = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M184 128h-16c-8.836 0-16 7.164-16 16v64c0 8.836 7.164 16 16 16h16c8.836 0 16-7.164 16-16v-64c0-8.8-7.2-16-16-16zm80 0h-16c-8.836 0-16 7.164-16 16v64c0 8.836 7.164 16 16 16h16c8.836 0 16-7.164 16-16v-64c0-8.8-7.2-16-16-16zm80 0h-16c-8.836 0-16 7.164-16 16v64c0 8.836 7.164 16 16 16h16c8.836 0 16-7.164 16-16v-64c0-8.8-7.2-16-16-16zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
    </svg>
);

export default SvgMeter;
