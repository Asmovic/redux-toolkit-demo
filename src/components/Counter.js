import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment,decrement,incrementBy } from '../redux/features/counter.feature'
const Counter = ()=>{
    let counterState = useSelector((state)=>{
        return state["counter"]
    })
    let dispatch = useDispatch();
    const onIncrement = () =>{
        dispatch(increment())
    }
    const onDecrement = () =>{
        dispatch(decrement( ))
    }
    const onIncrementBy = () =>{
        dispatch(incrementBy(10))
    }
    let {count}  = counterState;
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3 display-3">{count}</p>
                                <button className="btn btn-success mt-1" onClick={onIncrement}>Increment</button>
                                <button className="btn btn-warning mt-1" onClick={onDecrement}>Decrement</button>
                                <button className="btn btn-danger mt-1" onClick={onIncrementBy}>Decrement By 10</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Counter