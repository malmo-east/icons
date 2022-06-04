import * as React from 'react';
import { SVGProps } from 'react';

const SvgCircleCaretLeft = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M289.6 138c-8.719-3.812-18.91-2.094-25.91 4.375l-104 96C154.8 242.9 152 249.3 152 256s2.812 13.09 7.719 17.62l104 96c7 6.469 17.19 8.188 25.91 4.375C298.3 370.2 304 361.5 304 352V160c0-9.5-5.7-18.2-14.4-22zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
    </svg>
);

export default SvgCircleCaretLeft;
