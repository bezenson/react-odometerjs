# React Odometer.js

Simple react component for using [Odometer.js](https://github.com/HubSpot/odometer) in your React
application.

## How to use it

1. Run `npm install --save react-odometerjs` or `yarn add react-odometerjs`

2. Include component in your application:

```javascript
import Odometer from 'react-odometerjs';
// ...
return <Odometer value={1234} format="(.ddd),dd" />;
```

> Don't forget to include styles on your page. Official themes can be found
> [here](http://github.hubspot.com/odometer/api/themes/)

## Options

You can pass odometer options via props. See
[official documentation](http://github.hubspot.com/odometer/) of Odometer.js to learn about
available options.

## Issues
Found an issue? You are welcome [here](https://github.com/inferusvv/react-odometerjs/issues).
