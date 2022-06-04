import * as React from 'react';
import { SVGProps } from 'react';

const SvgShutters = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M508.6 205.2 488.54 94.9C502 91.14 512 78.72 512 64c0-17.66-14.34-32-32-32H32C14.34 32 0 46.34 0 64c0 14.72 9.953 27.14 23.49 30.85L3.424 205.2C1.633 214.9 9.184 224 19.17 224h4.096L3.426 333.2C1.633 342.9 9.184 352 19.17 352h4.096L3.426 461.2C1.633 470.9 9.184 480 19.17 480h473.7c9.984 0 17.54-9.057 15.74-18.85L488.7 352h4.096c9.984 0 17.54-9.057 15.74-18.85L488.7 224h4.096c10.004 0 17.604-9.1 15.804-18.8zM57.5 432l14.56-80h367.9l14.56 80H57.5zm0-128 14.56-80h367.9l14.56 80H57.5zm0-128 14.56-80h367.9l14.56 80H57.5z" />
    </svg>
);

export default SvgShutters;
