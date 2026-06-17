// Zustand like Library creation (Learning: Day 2 for Samir)

// Zustand-lite library Code
const createStore = (initializer) => {

  let state = {};

  const getState = () => state; // Arrow function implicit return of state
  
  const setState = (partial) => { // Explicit block, returns undefined
	  const nextState = typeof partial === "function"
	  ? partial(state) // If passed argument is a function
	  : partial; // If not a function
  state = {...state, ...nextState};
  };


const result = initializer(setState, getState); // This is the key moment where we pass setState and getState functions as argument
	  					// In usage section below we passed set and get.
	  					// They were placeholders for actual library setState and getState
	  					// Here set becomes setState and get becomes getState
	  					// setState and getState are reference only, no execution yet 
	  					// First execution happens only in usage when set calls setState and get calls getState in Zustand-lite 
	  state = {...state, ...result};

  return { // keep return and { on same line or JS will do automatic semicolon insertion
    getState,
    setState,
    ...result
  };

};

// Zustand-lite Usage: Call createStore with an arrow function 
