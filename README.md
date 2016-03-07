# normalizeStuff.js
:two_women_holding_hands: Amazingly efficient way to normalize elements.

Call it like so:

```javascript
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    normalizeStuff.heights('.foo', 220);
  });
}());
```

The first argument is the `elementSelector`, and the second argument (which is *optional*), is `height`. If you don't feed a `height` argument, [normalizeStuff.js](https://github.com/ryanpcmcquen/normalizeStuff.js) will apply the *tallest* height to all elements.

No `height` example:
```javascript
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    normalizeStuff.heights('.foo-bar');
  });
}());
```

Added in `0.2.0`, you can now normalize the `width` of elements. It works like so:

```javascript
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    normalizeStuff.widths('.bar-baz');
  });
}());
```

As with `normalizeStuff.heights()`, there is a second *optional* argument that can be used to specify an exact width. If no argument is given, [normalizeStuff.js](https://github.com/ryanpcmcquen/normalizeStuff.js) will apply the *greatest* width to all elements.

You can add **normalizeStuff.min.js** using RawGit CDN:

```html
<script src="https://cdn.rawgit.com/ryanpcmcquen/normalizeStuff.js/0c4040e3a3955ed579d8efbac7b388a3f80bcb70/normalizeStuff.min.js"></script>
```

https://cdn.rawgit.com/ryanpcmcquen/normalizeStuff.js/0c4040e3a3955ed579d8efbac7b388a3f80bcb70/normalizeStuff.min.js
