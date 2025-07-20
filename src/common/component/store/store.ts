import * as ReduxTools from '@reduxjs/toolkit';
import * as Redux from 'react-redux';


/**
 * The root store of the application.
 */
const store = ReduxTools.configureStore({
  reducer: {

  },
});

type Type = typeof store;

/**
 * The application dispatch type;
 */
type Dispatch = typeof store.dispatch;

/**
 * The application root state type;
 */
type State = ReturnType<typeof store.getState>;

/**
 * The function that gets the application dispatch function.
 */
const useDispatch: () => Dispatch = Redux.useDispatch;

/**
 * The function that use a specific selector to get the corresponding slice off the application root state.
 */
const useSelector: Redux.TypedUseSelectorHook<State> = Redux.useSelector;

export default store;

export type { Type, Dispatch, State };

export { useDispatch, useSelector };

// export * from './states';

// export * from './selectors';

// export * from './actions';
