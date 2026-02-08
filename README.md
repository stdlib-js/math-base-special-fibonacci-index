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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Fibonacci Number Index

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [Fibonacci number][fibonacci-number] index.

<section class="intro">

The [Fibonacci number][fibonacci-number] index is given by

<!-- <equation class="equation" label="eq:fibonacci_number_index" align="center" raw="n = \left \lfloor{\log_\varphi \biggl(F \cdot \sqrt{5} + \tfrac{1}{2}\biggr)}\right \rfloor" alt="Formula to compute the Fibonacci number index."> -->

```math
n = \left \lfloor{\log_\varphi \biggl(F \cdot \sqrt{5} + \tfrac{1}{2}\biggr)}\right \rfloor
```

<!-- <div class="equation" align="center" data-raw-text="n = \left \lfloor{\log_\varphi \biggl(F \cdot \sqrt{5} + \tfrac{1}{2}\biggr)}\right \rfloor" data-equation="eq:fibonacci_number_index">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/fibonacci-index/docs/img/equation_fibonacci_number_index.svg" alt="Formula to compute the Fibonacci number index.">
    <br>
</div> -->

<!-- </equation> -->

where `φ` is the [golden ratio][golden-ratio] and `F > 1`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import fibonacciIndex from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fibonacci-index@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-fibonacci-index/tags). For example,

```javascript
import fibonacciIndex from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fibonacci-index@v0.3.2-esm/index.mjs';
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import fibonacciIndex from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fibonacci-index@esm/index.mjs';

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

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/fibonacci`][@stdlib/math/base/special/fibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth Fibonacci number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-fibonacci-index.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-fibonacci-index

[test-image]: https://github.com/stdlib-js/math-base-special-fibonacci-index/actions/workflows/test.yml/badge.svg?branch=v0.3.2
[test-url]: https://github.com/stdlib-js/math-base-special-fibonacci-index/actions/workflows/test.yml?query=branch:v0.3.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-fibonacci-index/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-fibonacci-index?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-fibonacci-index.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-fibonacci-index/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-fibonacci-index/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-fibonacci-index/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-fibonacci-index/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-fibonacci-index/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-fibonacci-index/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-fibonacci-index/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-fibonacci-index/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-fibonacci-index/main/LICENSE

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[golden-ratio]: https://en.wikipedia.org/wiki/Golden_ratio

<!-- <related-links> -->

[@stdlib/math/base/special/fibonacci]: https://github.com/stdlib-js/math-base-special-fibonacci/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
