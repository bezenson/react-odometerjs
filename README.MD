# React Odometer.js

Simple React wrapper around [Odometer.js](https://github.com/HubSpot/odometer).

## How to use it

1. Installation

```bash
npm install --save react-odometerjs
```

or

```bash
yarn add react-odometerjs
```

2. Include component in your application:

```javascript
import Odometer from 'react-odometerjs';
// ...
return <Odometer value={1234} format="(.ddd),dd" />;
```

> Don't forget to include styles on your page. Official themes can be found
> [here](http://github.hubspot.com/odometer/api/themes/).


### Example
Codesandbox demo [here](https://codesandbox.io/s/sweet-firefly-1h4ic?file=/src/App.js:0-654).    

```javascript
import React, { useState, useEffect } from "react";
import Odometer from "react-odometerjs";

import "./styles.css";
import "./odometer.css"; // default theme

export default function App() {
  const [counter, setCounter] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((amount) => amount + 2);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Odometer</h1>
      <div className="odometer">
        <Odometer
          value={counter}
          format="( ddd),dd"
          theme="default"
          duration={400}
        />
      </div>
    </div>
  );
}
```   

## Options

You can pass odometer __options via props__. See
[official documentation](http://github.hubspot.com/odometer/) of Odometer.js to learn about
available options.

## [Next.js](https://github.com/zeit/next.js/) integration

Because Odometer.js requires `document` object, we should load library using
[dynamic import](https://github.com/zeit/next.js/#dynamic-import), to avoid loading library on
server-side.

Example snippet:

```javascript
import dynamic from 'next/dynamic'

const Odometer = dynamic(import('react-odometerjs'), {
    ssr: false,
    loading: () => 0
});
// ...
return <Odometer value={1234} format="(.ddd),dd" />;
```

## Gatsby

`Odometer.js`
```js
import Odometer from 'react-odometerjs'
export default Odometer
```

`App.js`
```js
import loadable from '@loadable/component'

const Odometer = loadable(() => import('./Odometer'))

...

<Odometer value={1234} />
```

## Issues

Found an issue? You are welcome [here](https://github.com/inferusvv/react-odometerjs/issues).
