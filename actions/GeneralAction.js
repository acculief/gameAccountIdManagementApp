function getUniqueStr(myStrong) {
  var strong = 1000;
  if (myStrong) strong = myStrong;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
}

export const createNewAccount = ({
  gameTitle,
  accountTitle,
  accountContext,
  memo,
  oldAccounts,
}) => {
  const account = {
    gameTitle: gameTitle,
    accountTitle: accountTitle,
    accountContext: accountContext,
    memo: memo,
    id: getUniqueStr(),
    createdAt: new Date(),
  };
  return {
    type: "create_new_account",
    accounts: [...oldAccounts, account],
  };
};
