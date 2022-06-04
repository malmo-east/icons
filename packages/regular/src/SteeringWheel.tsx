import * as React from 'react';
import { SVGProps } from 'react';

const SvgSteeringWheel = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm230.7 111.5L156.4 272H48.61C56.17 371.4 133.7 451.3 232 462.6V369c-.4-.4-.9-1-1.3-1.5zM280 369v93.6c98.3-11.3 175.8-91.2 183.4-190.6H355.6l-74.3 95.5c-.4.5-.9 1.1-1.3 1.5zm72-145h109.6C446.2 124.3 359.1 48 256 48 152 48 65.84 124.3 50.45 224H160l7.2-14.3c5.4-10.9 16.5-17.7 28.6-17.7h120.4c12.1 0 23.2 6.8 28.6 17.7L352 224z" />
    </svg>
);

export default SvgSteeringWheel;
