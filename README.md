## Иконки
[![Release](https://github.com/malmo-east/icons/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/malmo-east/icons/actions/workflows/npm-publish.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Как импортить иконки в проект

`import { Plus } from '@friday-team/regular/Plus';`

или

`import Plus from '@friday-team/regular/Plus';`

## Цвет иконок

В пакете `@friday-team/*` цвет иконок задается атрибутом `fill="currentColor"`, т.е. цвет наследуется от родительского свойства `color`.

## Внимание!

Компоненту иконки нужно задать ширину, высоту и цвет.

`<Plus width={16} height={16} fill="#222">`
