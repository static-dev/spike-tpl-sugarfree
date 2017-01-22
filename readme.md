# Spike - Sugarfree Template

[![Greenkeeper badge](https://badges.greenkeeper.io/static-dev/spike-tpl-sugarfree.svg)](https://greenkeeper.io/)

[![tests](http://img.shields.io/travis/static-dev/spike-tpl-base/master.svg?style=flat)](https://travis-ci.org/spike-tpl-base/spike-tpl-base) [![dependencies](http://david-dm.org/static-dev/spike-tpl-base.svg?path=root)](https://david-dm.org/static-dev/spike-tpl-base?path=root)

The base template for the latest [spike](https://github.com/static-dev/spike) version, but without sugarml or sugarss. The features in this template are designed by the [carrot](https://github.com/carrot) tech team.

## Installation

### With Spike

- `npm i spike -g`
- `spike tpl add sugarfree https://github.com/static-dev/spike-tpl-sugarfree`
- `spike new <projectname> -t sugarfree`

...or you can make it the default with `spike tpl default sugarfree`.

### Standalone

[Spike](https://github.com/static-dev/spike) uses [sprout](https://github.com/carrot/sprout) internally to generate it's project templates. This means you can even use this template without [spike](https://github.com/static-dev/spike) by using [sprout](https://github.com/carrot/sprout) directly.

- `npm i sprout-cli -g`
- `sprout add spike-tpl-sugarfree git@github.com:static-dev/spike-tpl-sugarfree.git`
- `sprout new spike-tpl-sugarfree <myproject>`

## Options

- **name** (name of template)
- **description** (a short description of the template)
- **github_username** (name of github user)
