export default function postReducer(
  state = {
    posts: [],
  },
  action
) {
  switch (action.type) {
    case "FETCH_POSTS":
        console.log(action.payload);
    return {
        ...state,posts:action.payload
    }
    default:
      return state;
  }
}
