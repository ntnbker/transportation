import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'device',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Device = require('./containers/DeviceContainer').default
      const reducer = require('./modules/device').default

      /*  Add the reducer to the store on key 'device'  */
      injectReducer(store, { key: 'device', reducer })

      /*  Return getComponent   */
      cb(null, Device)

    /* Webpack named bundle   */
    }, 'device')
  }
})
