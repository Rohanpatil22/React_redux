import {connect } from "react-redux";
import { increamentCount,decreamentCount } from "../action/action-type";


function ChnageCounter({countVal,increamentCount,decreamentCount}){

    const increament=()=>{

        increamentCount(countVal);
    }

    const decreament=()=>{
        decreamentCount(countVal);
    }
    return(
        <>
        <div>
            <button onClick={increament}>Increment +</button>
            <button>Decrement -</button>
        </div>
        </>
    )
}

const mapStateToProps=state=>(countVal=state);

const mapDispatchToProps= dispatch=>{
     increamentCount=()=>{
        dispatch(increamentCount());
     }
}
export default connect(mapStateToProps,mapDispatchToProps) (ChnageCounter);