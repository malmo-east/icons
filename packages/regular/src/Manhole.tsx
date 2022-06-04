import * as React from 'react';
import { SVGProps } from 'react';

const SvgManhole = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm31.4-364.83C285.7 115.3 272.5 128 256 128s-29.7-12.7-31.4-28.83C151.4 113.8 96 178.5 96 256s55.39 142.2 128.6 156.8c1.7-16.1 14.9-28.8 31.4-28.8s29.69 12.72 31.36 28.83C360.6 398.2 416 333.5 416 256S360.6 113.8 287.4 99.17zM208 336h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm64 128h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm64 128h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32z" />
    </svg>
);

export default SvgManhole;
