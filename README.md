<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Fibonacci Number Index

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute the [Fibonacci number][fibonacci-number] index.

<section class="intro">

The [Fibonacci number][fibonacci-number] index is given by

<!-- <equation class="equation" label="eq:fibonacci_number_index" align="center" raw="n = \left \lfloor{\log_\varphi \biggl(F \cdot \sqrt{5} + \tfrac{1}{2}\biggr)}\right \rfloor" alt="Formula to compute the Fibonacci number index."> -->

<div class="equation" align="center" data-raw-text="n = \left \lfloor{\log_\varphi \biggl(F \cdot \sqrt{5} + \tfrac{1}{2}\biggr)}\right \rfloor" data-equation="eq:fibonacci_number_index">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/fibonacci-index/docs/img/equation_fibonacci_number_index.svg" alt="Formula to compute the Fibonacci number index.">
    <br>
</div>

<!-- </equation> -->

where `φ` is the [golden ratio][golden-ratio] and `F > 1`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-fibonacci-index
```

</section>

<section class="usage">

## Usage

```javascript
var fibonacciIndex = require( '@stdlib/math-base-special-fibonacci-index' );
```

#### fibonacciIndex( F )

Computes the [Fibonacci number][fibonacci-number] index for `F_n > 1`.

```javascript
var n = fibonacciIndex( 2 );
// returns 3

n = fibonacciIndex( 3 );
// returns 4

n = fibonacciIndex( 5 );
// returns 5
```

If provided either a non-integer or `F_n <= 1`, the function returns `NaN`. 

```javascript
var n = fibonacciIndex( -1 );
// returns NaN

n = fibonacciIndex( 3.14 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var n = fibonacciIndex( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var fibonacciIndex = require( '@stdlib/math-base-special-fibonacci-index' );

var F1;
var F2;
var FN;
var n;
var i;

F1 = 1;
F2 = 1;
for ( i = 3; i < 79; i++ ) {
    FN = F1 + F2;
    F1 = F2;
    F2 = FN;
    n = fibonacciIndex( FN );
    console.log( 'n(%d) = %d', FN, n );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-fibonacci-index.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-fibonacci-index

[test-image]: https://github.com/stdlib-js/math-base-special-fibonacci-index/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-fibonacci-index/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-fibonacci-index/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-fibonacci-index?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-fibonacci-index
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-fibonacci-index/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-fibonacci-index/main/LICENSE

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[golden-ratio]: https://en.wikipedia.org/wiki/Golden_ratio

</section>

<!-- /.links -->
