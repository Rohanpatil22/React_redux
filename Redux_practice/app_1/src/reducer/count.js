import { increamentCount,decreamentCount } from "../action/action-type";

const initialState=1;
export default (state= initialState,action)=>{

    switch(action.type){
        case increamentCount:
            return state+1;
        
        case decreamentCount:
            return state-1;
            
        default:
            return state;
    }
}