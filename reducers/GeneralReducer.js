function getUniqueStr(myStrong) {
  var strong = 1000;
  if (myStrong) strong = myStrong;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
}

const INITIAL_STATE = {
  accounts: [
    {
      gameTitle: "モンスト",
      accountTitle: "モンスト引退アカウント",
      accountContext: "id: 1930334, 運極1000",
      memo:
        "2017年4月から開始,2017年4月から開始2017年4月から開始2017年4月から開始2017年4月から開始2017年4月から開始2017年4月から開始2017年4月から開始2017年4月から開始2017年4月から開始",
      id: getUniqueStr(),
      createdAt: new Date(),
    },
  ],
  unopened_notification: false,
};

const GeneralReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "success_check_notification":
      return {
        ...state,
        todo_list_count: action.todo_list_count,
        unopened_notification: action.unopened_notification,
      };
    default:
      return state;
  }
};

export default GeneralReducer;
