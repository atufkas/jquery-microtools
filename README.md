# jQuery Microtools

## About

_Note: idea/project at very early stage_ 

jQuery Microtools is a plugin for [jQuery](https://github.com/jquery/jquery) that aims to extend jQuery with some useful functions/psudo-selectors potentially needed... somewhere where fine tuning layouts matters. It is not officially registered with the 
jQuery plugin registry yet.

Currently implemented:

* pseudo-selector for fetching elements with current content overflow on any axis: `:mt-overflow`
* pseudo-selector for fetching elements with current content overflow on x-axis: `:mt-overflow-x`
* pseudo-selector for fetching elements with current content overflow on y-axis: `:mt-overflow-y`

pseudo-selectors are prefixed with `mt-` for reducing the risk of potential namespace-clashes.

## Installation

Be sure you already included jQuery in your project (> 1.10.1 is demanded, though > 1.8.x should work anyway).

Clone git repository...

```
$ git clone git@github.com:atufkas/jquery-microtools.git
```

...or install via bower:

```
$ bower install git@github.com:atufkas/jquery-microtools.git
```

## Contribute

Ideas, suggestions and pull requests are welcome.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Matthias Lienau &lt;matthias@mlienau.de&gt;