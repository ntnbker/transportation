import { connectWithLifecycle } from 'react-lifecycle-component'
import CounterContainer from '../components/Counter'
import * as counterActions from '../modules/counter'

const mapDispatchToProps = {
  ...counterActions,
  increment: () => counterActions.increment(1)
}
const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default connectWithLifecycle(
  mapStateToProps, mapDispatchToProps
)(CounterContainer)
