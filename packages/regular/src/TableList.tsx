import * as React from 'react';
import { SVGProps } from 'react';

const SvgTableList = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm192 72h272V96c0-8.84-7.2-16-16-16H192v88zm-48-88H64c-8.84 0-16 7.16-16 16v72h96V80zM48 216v80h96v-80H48zm0 128v72c0 8.8 7.16 16 16 16h80v-88H48zm144 88h256c8.8 0 16-7.2 16-16v-72H192v88zm272-136v-80H192v80h272z" />
    </svg>
);

export default SvgTableList;
