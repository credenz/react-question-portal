const initstate = {
  title: "",
  question: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  rightans: "",
  lang: "",
};
const submitReducer = (state = initstate, action) => {
  if (action.type === "ADD_TITLE")
    return {
      ...state,
      title: action.title,
    };
  if (action.type === "ADD_QUESTION")
    return {
      ...state,
      question: action.question,
    };
  if (action.type === "ADD_OPTION1")
    return {
      ...state,
      option1: action.option1,
    };
  if (action.type === "ADD_OPTION2")
    return {
      ...state,
      option2: action.option2,
    };
  if (action.type === "ADD_OPTION3")
    return {
      ...state,
      option3: action.option3,
    };
  if (action.type === "ADD_OPTION4")
    return {
      ...state,
      option4: action.option4,
    };
  if (action.type === "ADD_RIGHTANS")
    return {
      ...state,
      rightans: action.rightans,
    };
  if (action.type === "ADD_LANG")
    return {
      ...state,
      lang: action.lang,
    };
  return state;
};

export default submitReducer;
