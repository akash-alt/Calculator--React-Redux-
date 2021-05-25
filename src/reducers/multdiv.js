const intialState = 5;
const multTheNumber = (state=intialState,action)=>{
    switch(action.type){
        case "MULTIPLICATION": return state*2;
        case "DIVISION": return state/5;
        default:return state; 
    }
}
export default multTheNumber;
