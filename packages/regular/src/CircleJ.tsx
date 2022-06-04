import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleJ = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm56-336c-13.2 0-24 10.8-24 24v138.7c0 25-21.5 45.3-48 45.3s-48-20.3-48-45.3V280c0-13.2-10.7-24-24-24s-24 10.8-24 24v10.67c0 51.43 43.1 93.33 96 93.33s96-41.86 96-93.33V152c0-13.2-10.7-24-24-24z" />
    </svg>
);

export default SvgCircleJ;
