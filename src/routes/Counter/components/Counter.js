import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap';

export const Counter = ({ counter, increment, doubleAsync }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {counter}</h2>
    <Button className='btn btn-primary' onClick={increment}>
      Increment
    </Button>
    {' '}
    <Button className='btn btn-secondary mx-4' onClick={doubleAsync}>
      Double (Async)
    </Button>
  </div>
)
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter
