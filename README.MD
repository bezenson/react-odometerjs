# React Odometer.js

Simple react component for using [Odometer.js](https://github.com/HubSpot/odometer) in your React
application.

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
> [here](http://github.hubspot.com/odometer/api/themes/)

## Options

You can pass odometer __options via props__.<br/>
See [official documentation](http://github.hubspot.com/odometer/) of Odometer.js
to learn about available options.

## [Next.js](https://github.com/zeit/next.js/) integration

Because [Odometer.js](https://github.com/HubSpot/odometer) required `document` object,
we should load library in [dynamic import](https://github.com/zeit/next.js/#dynamic-import),
to not load library on server-side.

Example snippet:

```jsx
import dynamic from 'next/dynamic'

const Odometer = dynamic(import('react-odometerjs'), {
    ssr: false,
    loading: () => 0
});

...
<Odometer value={ this.props.value } format="(d,d)"/>
```

## Issues

Found an issue? You are welcome [here](https://github.com/inferusvv/react-odometerjs/issues).
