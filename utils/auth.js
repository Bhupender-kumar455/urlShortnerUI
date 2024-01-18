const iDontKnowWhatItIs = new Map();

function setUser(id, user) {
  return iDontKnowWhatItIs.set(id, user);
}
function getUser(id) {
  return iDontKnowWhatItIs.get(id);
}

module.exports = {
  setUser,
  getUser,
};
