# normalizeStuff.js
:two_women_holding_hands: Amazingly efficient way to normalize elements.

Call it like so:

```javascript
normalizeStuff.heights('.foo', 220);
```

The first argument is the `elementSelector`, and the second argument (which is *optional*), is `height`. If you don't feed a `height` argument, [normalizeStuff.js](https://github.com/ryanpcmcquen/normalizeStuff.js) will apply the *tallest* height to all elements.

No `height` example:
```javascript
normalizeStuff.heights('.foo-bar');
```

Added in `0.2.0`, you can now normalize the `width` of elements. It works like so:

```javascript
normalizeStuff.widths('.bar-baz');
```

As with `normalizeStuff.heights()`, there is a second *optional* argument that can be used to specify an exact width. If no argument is given, [normalizeStuff.js](https://github.com/ryanpcmcquen/normalizeStuff.js) will apply the *greatest* width to all elements.

You can add **normalizeStuff.min.js** using RawGit CDN:

```html
<script src="https://cdn.rawgit.com/ryanpcmcquen/normalizeStuff.js/c36225a5379c1521079d8b7eaa70c0299768a5b8/normalizeStuff.min.js"></script>
```

https://cdn.rawgit.com/ryanpcmcquen/normalizeStuff.js/c36225a5379c1521079d8b7eaa70c0299768a5b8/normalizeStuff.min.js
