const redux = require('redux')

const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'

const BUY_ICE = 'BUY_ICE'

function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First Redux Action'
    }
}

function buyIce(){
    return{
        type:BUY_ICE
    }
}

//(Previous State,Action)=>newState
// const initialState = {
//     numOfCakes : 10,
//     numOfIce : 20
// }

const initialCakeState ={
    numOfCakes :10
}

const initialIceState = {
    numOfIce:20
}

// const reducer = (state = initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes:state.numOfCakes - 1
//         }
//         case BUY_ICE:return{
//             ...state,
//             numOfIce:state.numOfIce - 1
//         }
//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes - 1
        }
        default: return state
    }
}

const iceReducer = (state = initialIceState,action)=>{
    switch(action.type){
        case BUY_ICE:return{
            ...state,
            numOfIce:state.numOfIce - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake : cakeReducer,
    ice: iceReducer
})

const store = createStore(rootReducer)

console.log('initial State :',store.getState())
const unsubscribe = store.subscribe(()=> console.log('Updated State: ',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyIce())
unsubscribe()