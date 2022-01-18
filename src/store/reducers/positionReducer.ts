// local data
const posn = {
  height: {
    px: {
      header: 65,
    },
    vh: {
      intro: 96,
      resume: 300,
      summary: 100,
      tools: 100,
      job: 100,
    },
  }
}

export const initState = posn;

export const positionReducer = (
  state = initState,
) => {
  return state
};
