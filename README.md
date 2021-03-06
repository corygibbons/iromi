# Iromi

Iromi is a collection of JS colour functions that automate the selection of beautiful, accessible colours.

[![npm version](https://img.shields.io/npm/v/iromi.svg?style=flat-square)](https://www.npmjs.com/package/iromi)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Install

```
$ npm install iromi --save
```

## Functions

#### `iromi.type(backgroundColor, contrast, size)`

* **`backgroundColor`**:
  * Valid colour string (`#ffffff`, `rgb(0,0,0)`)
* **`contrast`**:
  * `'default'`: AA compliant
  * `'more'`: AAA compliant
  * `'less`: Not compliant
* **`size`**:
  * `'small'`
  * `'large'`

```js
const iromi = require('iromi');

// Will return a text colour that is AA compliant on #ffffff
textOnWhiteBg = iromi.type('#ffffff');

// Will return a text colour is AA compliant on #000000
textOnBlackBg = iromi.type('#000000');

// Iromi will try to return an AA compliant text colour if no contrast argument
// is given. The following will try to return an AAA compliant text colour.
textOnWhiteBgAAA = iromi.type('#ffffff', 'more');

// Since Iromi returns a tinycolor object it's easy to choose your format
textOnWhiteBg.toHexString(); // '#727272'
textOnWhiteBg.toRgbString(); // 'rgb(115, 115, 115)'
```
