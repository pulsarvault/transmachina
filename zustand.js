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
	score: 0,
	// Arrow function, if single argument, no () required
	// The arrow function with {} use ({}) or use n explicit return
    // get() calls getState and set calls setState in the library
	// Add your custom functions below
	increaseScore: () => set(state => ({score: state.score + 1})),
	getHealth: () => get().health
};
});

// getState and setState are core library functions
console.log('Initial State: ', myStore.getState());
myStore.setState({score: 802});
console.log('New State 1:', myStore.getState());
myStore.increaseScore();
console.log('New State 2: ', myStore.getState());
myStore.setState({health: 42});
console.log('New State 3: ', myStore.getState());
