# 💧 plop-action-copy

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![github actions][github-actions-badge]][github-actions]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

_A [plop][plop] action to copy files._

## 📦 Installation

This package is installable from [npm][npm].

```bash
npm install --save-dev plop-action-copy
```

## 🥑 Usage

Before you can use the `plop-pack`, you have to load it into the `plop` object.

```javascript
plop.load("plop-action-copy")
```

Once loaded, you now have access the following actions.

### `copy`

Copies a file from a source path to a destination path.

```javascript
{
    type: "copy",
    src: "templates/default.jpg",
    dest: "my-blog-post/images/default.jpg"
}
```

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

## ✨ Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/use-countdown/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/use-countdown/commits?author=bradgarropy" title="Documentation">📖</a> <a href="https://github.com/bradgarropy/use-countdown/commits?author=bradgarropy" title="Tests">⚠️</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[plop]: https://plopjs.com
[npm]: https://npmjs.com
[issues]: https://github.com/bradgarropy/plop-action-copy/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://github.com/bradgarropy/ama
[version-badge]: https://img.shields.io/npm/v/plop-action-copy.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/plop-action-copy?style=flat-square
[size-badge]: https://img.shields.io/bundlephobia/minzip/plop-action-copy?style=flat-square
[github-actions-badge]: https://img.shields.io/github/workflow/status/bradgarropy/plop-action-copy/%F0%9F%9A%80%20release?style=flat-square
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/plop-action-copy?style=flat-square
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
[bundlephobia]: https://bundlephobia.com/result?p=plop-action-copy
[github-actions]: https://github.com/bradgarropy/plop-action-copy/actions
[contributing]: https://github.com/bradgarropy/plop-action-countdown/blob/master/contributing.md
[contributors]: #-Contributors
[discord]: https://bradgarropy.com/discord
