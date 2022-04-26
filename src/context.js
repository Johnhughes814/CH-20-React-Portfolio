import { createContext, useReducer } from "react";

// -- React.createContext -- //
// Creates a Context object assigning and exporting it as 'ThemeContext'. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
export const ThemeContext = createContext();

// sets inital state for darkmode when page opens
const INITIAL_STATE = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};


export const ThemeProvider = (props) => {
    // -- useReducer -- //
    // HOOKS (used with function components to easilty pass state). An alternative to useState (which Returns a stateful value, and a function to update it). Accepts a reducer of type (state, ACT_ION) => newState, and returns the current state paired with a dispatch method.
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  
    return (
      // -- Context.Provider -- //
      // Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
  
      // The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
      <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
    );
  };