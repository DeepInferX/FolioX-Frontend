const findNewBranches = ({ newBranches, orginalBranches }) => {
  console.log("Adil", newBranches);
  const newlyAddedBranches = [];

  for (let j = 0; j < newBranches.length; j++) {
    if (newBranches[j].id === null) {
      newlyAddedBranches.push(newBranches[j]);
    }
  }

  return newlyAddedBranches;
};

export default findNewBranches;
