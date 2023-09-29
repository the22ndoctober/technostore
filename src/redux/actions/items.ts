export const addItem = (state:any)=>{
    return state
}

export const selectItem = (state:any, action:any)=>{
    return state.map((item:any,id:number)=>
        action.payload === id ? {...item, isChecked: !item.isChecked} : item
    )
}