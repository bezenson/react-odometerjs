declare module 'odometer' {
  import { type ReactOdometerProps } from './src';
  class Odometer {
    constructor (options: ReactOdometerProps);
    public update (value: number): number;
  }
  export default Odometer;
}
