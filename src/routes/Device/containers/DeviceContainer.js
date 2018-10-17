import { connectWithLifecycle } from 'react-lifecycle-component'
import DeviceContainer from '../components/Device'
import * as deviceActions from '../modules/device'

const mapDispatchToProps = {
  ...deviceActions,
  increment: () => deviceActions.increment(1)
}
const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default connectWithLifecycle(
  mapStateToProps, mapDispatchToProps
)(DeviceContainer)
