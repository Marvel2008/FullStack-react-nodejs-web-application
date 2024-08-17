export const SIGNUP_STATE ={
    email: '',
    phone_number:'',
    password:''
}

export const postReducer = (state, action) =>{
    switch(action.type){
        case "CHANGE_INPUT":
            return{
                //...-spread operator чи оператор розпакування
                ...state,//Для збереження поточного стану об'єкта та оновлення лише таких частин стану, що змінилися
                [action.payload.name]: action.payload.value,//змін.ється лише одна властивість
            }
    }
}