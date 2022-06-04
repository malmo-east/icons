import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleCaretUp = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M273.6 159.7c-4.5-4.9-10.9-7.7-17.6-7.7s-13.1 2.8-17.6 7.7l-96 104c-6.469 7-8.188 17.19-4.375 25.91C141.8 298.3 150.5 304 160 304h192c9.531 0 18.16-5.656 21.1-14.38 3.813-8.719 2.094-18.91-4.375-25.91L273.6 159.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
    </svg>
);

export default SvgCircleCaretUp;
