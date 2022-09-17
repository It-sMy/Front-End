
const WRITE = 'input/WRITE';

const initialState = {
    stack:'',
    name:'',
}

export function createPage(input:string){
    console.log('여기는 action creators',input)
    return { type:WRITE, payload:input}
}

export default function reducer(state = initialState, action:any){
    switch (action.type) {
        case 'input/WRITE':
            console.log('여기는 리듀서', action.payload)
            const new_list = {
                ...state,
                ...action.payload
            }
            console.log(new_list)
            return new_list;
        default:
            return state;
    }
}