// Zustand like Library creation (Learning: Day 1 for Samir)

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
    setState
  };

};

// Zustand-lite Usage: Call createStore with an arrow function as an argument. myStore Closure object is created.
// myStore = {
//  getState: () => state,     // Function to read state
//  setState: (partial) => {}  // Function to update state
// }
// The state (health, score) is HIDDEN inside the closure!
// You can only access it through getState() and setState()
// 'set' and 'get' are REFERENCES (NOT called yet) 
// initializer in createStore(initializer) then holds reference to the (set, get) arrow function.  
// set and get are just useful shorthands
 
const myStore = createStore((set, get) => {
return {
	health: 100,
	score: 0
};
});

// get() calls getState and set calls setState in the library
console.log('State: ', myStore.getState());
myStore.setState({score: 82});
console.log('New State: ', myStore.getState());
