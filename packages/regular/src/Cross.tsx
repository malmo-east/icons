import * as React from 'react';
import { SVGProps } from 'react';

const SvgCross = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M335.1 112H272V48c0-26.51-21.5-48-48-48h-64c-26.5 0-48 21.49-48 48v64H47.1C21.49 112 0 133.5 0 160v64c0 26.51 21.49 48 47.1 48H112v192c0 26.5 21.5 48 48 48h64c26.51 0 48-21.49 48-48V272h63.1c26.51 0 48-21.49 48-48v-64c0-26.5-20.6-48-48-48zm0 112H224v240h-64V224H47.1v-64H160V48h64v112h111.1v64z" />
    </svg>
);

export default SvgCross;
