![Latest version](https://img.shields.io/npm/v/react-odometerjs)
![Downloads](https://img.shields.io/npm/dm/react-odometerjs)

# React Odometer.js

Simple React wrapper around [Odometer.js](https://github.com/HubSpot/odometer).

  - [How to use this library](#how-to-use-this-library)
  - [Options](#options)
  - [Next.js integration](#nextjs-integration)
  - [Gatsby integration](#gatsby-integration)
  - [Issues](#issues)

## How to use this library

1. Install npm package:

```bash
npm install --save react-odometerjs
```

or

```bash
yarn add react-odometerjs
```

2. Import CSS file in your app `<head>`:

```html
<link rel="stylesheet" href="odometer-theme-default.css" />
```

> Official themes can be found [here](http://github.hubspot.com/odometer/api/themes/).

3. Include component in your application:

```javascript
import Odometer from 'react-odometerjs';

const App = () => {
    return <Odometer value={1234} format="(.ddd),dd" />;
}
```

## Options

| Option      | Type                   | Default       | Description                                                                                                                                 |
| ----------- | ---------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `animation` | `'count' \| undefined` |               | Count is a simpler animation method which just increments the value, use it when you're looking for something more subtle.                  |
| `duration`  | `number`               | `2000`        | Change how long the javascript expects the CSS animation to take.                                                                           |
| `format`    | `string`               | `'(,ddd).dd'` | Change how digit groups are formatted, and how many digits are shown after the decimal point.                                               |
| `theme`     | `string`               |               | Specify the theme (if you have more than one theme css file on the page). Will add CSS class .odometer-theme-{prop value} to wrapper `div`. |
| `value`     | `number`               |               | Current value. Change it to run animation.                                                                                                  |

You can read about options on [official website](http://github.hubspot.com/odometer/).

Also component can receive any `div` property.

Example:

```javascript
// Pass `style` prop
return <Odometer value={1234} style={{ cursor: 'pointer' }} />;
```

## Next.js integration

Because Odometer.js requires `document` object, we should load library using
[dynamic import](https://github.com/zeit/next.js/#dynamic-import), to avoid loading library on server-side.

Example snippet:

```javascript
import dynamic from 'next/dynamic'

const Odometer = dynamic(import('react-odometerjs'), {
    ssr: false,
    loading: () => 0
});

const App = () => {
    return <Odometer value={1234} />;
}
```

## Gatsby integration

`Odometer.js`
```js
import Odometer from 'react-odometerjs'

export default Odometer;
```

`App.js`
```js
import loadable from '@loadable/component'

const Odometer = loadable(() => import('./Odometer'))

const App = () => {
    return <Odometer value={1234} />;
}
```

## Issues

Found an issue? You are welcome [here](https://github.com/inferusvv/react-odometerjs/issues).
