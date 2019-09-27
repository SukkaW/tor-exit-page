# Tor Exit Page

This is an alternative `This is a Tor Exir Router` page, used to replace [the default, ugly one](https://svn.torproject.org/svn/tor/branches/hidserv-design-changes/contrib/tor-exit-notice.html).

## Build

[Git](https://git-scm.com/) and [NodeJS](https://github.com/nodejs/node) are required.

```bash
$ npm i gulp-cli -g # Use `yarn global add gulp-cli` if you are using yarn
$ git clone https://github.com/SukkaW/tor-exit-page && cd tor-exit-page
$ npm i # Use `yarn` if you are using yarn
```

Edit `src/config.yaml`, then

```bash
$ gulp build
```

And you will find `index.html` at `dist` directory.

## Usage

Basically, you need to setup a webserver (Apache, Nginx, Caddy, etc.) and serve the `index.html`.

Tor can do that for you if your DirPort is on TCP port 80. For more information, please consult the following documentation: [Tor Project | Exit](https://community.torproject.org/relay/setup/exit/)

## License

`Tor Exit Page` is open sourced under [GPLv3](./LICENSE) license.

## Maintainer

**Tor Exit Page** © [Sukka](https://github.com/SukkaW), Released under the [GPLv3](./LICENSE) License.<br>
Authored and maintained by `Sukka`.

> [Personal Website](https://skk.moe) · [Blog](https://blog.skk.moe) · GitHub [@SukkaW](https://github.com/SukkaW) · Telegram Channel [@SukkaChannel](https://t.me/SukkaChannel) · Twitter [@isukkaw](https://twitter.com/isukkaw) · Keybase [@sukka](https://keybase.io/sukka)