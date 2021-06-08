import { AnyAction, combineReducers, Store } from 'redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';


export type RootState = ReturnType<typeof rootReducer>;

export interface State { }
export type ActionType<R> = ThunkAction<R, State, {}, AnyAction>;

const DEFAULT_STATE: State | {} = {};

let store: any = null;
let devtools = (func: any) => func;

const rootReducer = combineReducers({});

export function getStore() {
  return store;
}

export type Dispatch = ThunkDispatch<State, {}, AnyAction>;

export type AppStore = Store<RootState> & {
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>;
};

export default function getOrInitializeStore(initialState = DEFAULT_STATE): AppStore {
  if (!store || typeof window === 'undefined') {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), devtools));
  }
  return store;
}
