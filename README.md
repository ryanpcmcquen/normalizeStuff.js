# normalizeHeights.js
:two_women_holding_hands: Amazingly efficient way to normalize element heights.

Call it like so:

```javascript
window.addEventListener('load', function() {
  normalizeHeights('.icon-img-card', 220)
});
```

The first argument is the `elementSelector`, and the second argument (which is *optional*), is `height`. If you don't feed a `height` argument, [normalizeHeights.js](https://github.com/ryanpcmcquen/normalizeHeights.js) will apply the *tallest* height to all elements.

You can add **normalizeHeights.js** using RawGit CDN:

```html
<script src="https://cdn.rawgit.com/ryanpcmcquen/normalizeHeights.js/c529574fa2216c51296cd433755ec167a1ae3e43/normalizeHeights.min.js"></script>
```

https://cdn.rawgit.com/ryanpcmcquen/normalizeHeights.js/c529574fa2216c51296cd433755ec167a1ae3e43/normalizeHeights.min.js
