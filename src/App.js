import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber,mulNumber,devNumber} from "./actions/index"

const App = ()=>{
    const myState = useSelector((state)=> state.changeTheNumber);
    const myOtherState = useSelector((state)=> state.multTheNumber);

    const dispatch = useDispatch()
    return(
        <>
            <div className="container">
                <h1>Increment/Counter Counter</h1>
                <h4>using React and Redux</h4>

                <div className="quantity">
                    <a className="quantity_minus" title="Decrement"
                    onClick={() => dispatch(decNumber())} 
                    ><span>-</span></a>
                    <input name="quantity" type="text" value={myState}
                     className="quantity_input"/>
                    <a className="quantity_plus" title="Increment"
                    onClick={() => dispatch(incNumber())}><span>+</span></a>

                </div>
            </div>


            <div className="container my-5">
                <h1>Division/Multiplication Counter</h1>
                <h4>using React and Redux</h4>

                <div className="quantity">
                    <a className="quantity_minus" title="Decrement"
                    onClick={() => dispatch(devNumber())} 
                    ><span>/</span></a>
                    <input name="quantity" type="text" value={myOtherState}
                     className="quantity_input"/>
                    <a className="quantity_plus" title="Increment"
                    onClick={() => dispatch(mulNumber(5))}><span>*</span></a>

                </div>
            </div>
        </>   
    )
}
export default App;
