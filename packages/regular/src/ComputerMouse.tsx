import * as React from 'react';
import { SVGProps } from 'react';

const SvgComputerMouse = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
        <path d="M224 0h-64C71.63 0 0 71.62 0 160v192c0 88.38 71.63 160 160 160h64c88.38 0 160-71.63 160-160V160C384 71.62 312.4 0 224 0zm112 160v16H216V48h8c61.9.12 111.9 50.12 112 112zM160 48h8v128H48v-16c.13-61.88 50.13-111.88 112-112zm64 416h-64c-61.88-.125-111.9-50.13-112-112V224h288v128c-.1 61.9-50.1 111.9-112 112z" />
    </svg>
);

export default SvgComputerMouse;
