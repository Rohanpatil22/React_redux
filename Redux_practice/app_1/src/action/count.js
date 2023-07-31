import { increamentCount,decreamentCount } from "./action-type";


export const Add=(count)=>({
  
    type:increamentCount,
    payload:count
});

export const Subtract=(count)=>({
    type:decreamentCount,
    payload:count
});