# WalletConnect build browsers

As WalletConnect does not build with rollup, this a a webpack browser pre-built which can be used in rollup.

## Development

```
npm run-script build
```

```
npm publish --access public
```

## Jest environment

Add the following to your setup.js:

```javascript
// WalletconnectV2
import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
```
