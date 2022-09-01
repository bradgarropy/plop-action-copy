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
    <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/plop-action-copy/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/plop-action-copy/commits?author=bradgarropy" title="Documentation">📖</a> <a href="https://github.com/bradgarropy/plop-action-copy/commits?author=bradgarropy" title="Tests">⚠️</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://www.mattscholta.com"><img src="https://avatars.githubusercontent.com/u/545829?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matthew Scholta</b></sub></a><br /><a href="https://github.com/bradgarropy/plop-action-copy/commits?author=visormatt" title="Code">💻</a> <a href="https://github.com/bradgarropy/plop-action-copy/commits?author=visormatt" title="Documentation">📖</a></td>
    <td align="center"><a href="http://jamesqquick.com"><img src="https://avatars.githubusercontent.com/u/5391915?v=4?s=100" width="100px;" alt=""/><br /><sub><b>James Q Quick</b></sub></a><br /><a href="#ideas-jamesqquick" title="Ideas, Planning, & Feedback">🤔</a> <a href="#userTesting-jamesqquick" title="User Testing">📓</a></td>
    <td align="center"><a href="http://stevencreates.tech"><img src="https://avatars.githubusercontent.com/u/37391025?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Steven Hofheins</b></sub></a><br /><a href="#blog-StevenCreates" title="Blogposts">📝</a> <a href="#tutorial-StevenCreates" title="Tutorials">✅</a></td>
    <td align="center"><a href="http://fish.solar"><img src="https://avatars.githubusercontent.com/u/66899904?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jack Reiker</b></sub></a><br /><a href="#ideas-rpxs" title="Ideas, Planning, & Feedback">🤔</a> <a href="#userTesting-rpxs" title="User Testing">📓</a></td>
    <td align="center"><a href="https://github.com/Mehdmhd"><img src="https://avatars.githubusercontent.com/u/40036740?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mehdi Makhloufi</b></sub></a><br /><a href="#ideas-Mehdmhd" title="Ideas, Planning, & Feedback">🤔</a> <a href="#userTesting-Mehdmhd" title="User Testing">📓</a></td>
    <td align="center"><a href="https://github.com/SirIsaacNeutron"><img src="https://avatars.githubusercontent.com/u/36581033?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Badir</b></sub></a><br /><a href="https://github.com/bradgarropy/plop-action-copy/issues?q=author%3ASirIsaacNeutron" title="Bug reports">🐛</a> <a href="#ideas-SirIsaacNeutron" title="Ideas, Planning, & Feedback">🤔</a> <a href="#userTesting-SirIsaacNeutron" title="User Testing">📓</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/bboydflo"><img src="https://avatars.githubusercontent.com/u/2241459?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Florin Cosmin</b></sub></a><br /><a href="https://github.com/bradgarropy/plop-action-copy/commits?author=bboydflo" title="Code">💻</a></td>
    <td align="center"><a href="https://anthonywhitaker.me"><img src="https://avatars.githubusercontent.com/u/581357?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anthony Whitaker</b></sub></a><br /><a href="https://github.com/bradgarropy/plop-action-copy/commits?author=AnthonyWhitaker" title="Code">💻</a></td>
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
