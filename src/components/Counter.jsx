import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/countSlice'
import { decrement } from '../redux/countSlice'
import { reset } from '../redux/countSlice'

function Counter() {
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counterReducer.count)

  return (
    <>
    <div style={{width:'400px'}} className='border rounded text-center p-4 shadow'>
    <h5 className='fs-1 mb-3'>Counter App</h5>
    <span style={{fontSize:'70px'}}>{count}</span>
    <div className="d-flex justify-content-between align-items-center mt-3">
    <button type="button" className="btn btn-warning"  onClick={()=>dispatch(decrement())}>Decrement</button>
    <button type="button" className="btn btn-danger"  onClick={()=>dispatch(reset())}>Reset</button>
    <button type="button" className="btn btn-success" onClick={()=>dispatch(increment())}>Increment</button>
    </div>
    </div>
    </>
  )
}

export default Counter