import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareCaretLeft = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <path d="M384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.34 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm16 384c0 8.82-7.18 16-16 16H64c-8.82 0-16-7.18-16-16V96c0-8.82 7.18-16 16-16h320c8.82 0 16 7.18 16 16v320zM273.6 138c-8.719-3.812-18.91-2.094-25.91 4.375l-104 96C138.8 242.9 136 249.3 136 256s2.812 13.09 7.719 17.62l104 96c7 6.469 17.19 8.188 25.91 4.375C282.3 370.2 288 361.5 288 352V160c0-9.5-5.7-18.2-14.4-22z" />
    </svg>
);

export default SvgSquareCaretLeft;
