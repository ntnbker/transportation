import { connectWithLifecycle } from 'react-lifecycle-component'
import BookDashboardContainer from '../components/BookDashboard'
import * as bookActions from '../modules/bookTrip'

const mapDispatchToProps = {
  ...bookActions,
}
const mapStateToProps = (state) => {
  return {
    ...state.bookTrip,
  }
}

export default connectWithLifecycle(
  mapStateToProps, mapDispatchToProps
)(BookDashboardContainer)
