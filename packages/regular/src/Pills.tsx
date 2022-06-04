import * as React from 'react';
import { SVGProps } from 'react';

const SvgPills = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <path d="M529.1 206.9c-62.38-62.36-163.8-62.49-226.3 0s-62.5 163.8 0 226.3c62.5 62.36 163.8 62.49 226.3 0s62.5-164 0-226.3zm-207.3 52.8 154.5 154.5C375.8 478.7 257 360.4 321.8 259.7zm188.5 120.5L355.8 225.7c100.5-64.6 219.2 53.8 154.5 154.5zM112 32C50.13 32 0 82.13 0 143.1v223.1c0 61.86 50.13 111.1 112 111.1s112-50.13 112-111.1V143.1C224 82.13 173.9 32 112 32zm64 223.1H48v-112c0-84.74 128-84.74 128 0v112z" />
    </svg>
);

export default SvgPills;
