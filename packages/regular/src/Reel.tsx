import * as React from 'react';
import { SVGProps } from 'react';

const SvgReel = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M64 176h320v-32H64v32zM24 48h40v64h320V48h40c13.3 0 24-10.75 24-24 0-13.26-10.7-24-24-24H24C10.75 0 0 10.74 0 24c0 13.25 10.75 24 24 24zm88 0h224v32H112V48zm272 224H64v32h320v-32zm48-64H64v32h368c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-8 256h-40v-64H64v64H24c-13.25 0-24 10.7-24 24s10.75 24 24 24h400c13.25 0 24-10.75 24-24 0-13.3-10.7-24-24-24zm-88 0H112v-32h224v32zM64 368h320v-32H64v32z" />
    </svg>
);

export default SvgReel;
