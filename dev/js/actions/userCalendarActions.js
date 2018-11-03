import { resource } from './backendActions'

// A fake action I made as an example
//.Export each function individually
// Define the inputs to the action 
// (in this case, just a time value)
// Once you've done needed computations, return a dispatch object
// Dispatch allows the action to communicate with the corresponding reducer
export const FAKE_set_start_time = (time) => {
  // You could do computations here if needed
  // Suppose time values were offset by 2 for some reason:
  let hour = time - 2
  return (dispatch) => dispatch({
    type: "SET_START",
    name: event.target.name
  })
}

// Another fake action dealing with GET calls
// "Resource" is another action that communicates with the backend
// We "GET" from the "hours/" address, then the response is passed to variable "r"
// We can then package "r" as part of our dispatch
export const FAKE_get_hours = () => {
    return (dispatch) => {
        resource('GET', 'hours/').then( r => {
            dispatch({
                type: "GET_HOURS",
                all_hours: r
            })
        })
    }
}
