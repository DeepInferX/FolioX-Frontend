const findUpdatedBranches = ({newBranches, orginalBranches}) => {
    const updatedBranches = []

    for(let i = 0; i < newBranches.length; i++){
        for(let j = 0; j < orginalBranches.length; j++){
            if(newBranches[i].id === orginalBranches[j].id){
                if(newBranches[i].branch_name !== orginalBranches[j].branch_name || (newBranches[i].branch_hod !== orginalBranches[j].branch_hod)){
                    updatedBranches.push(newBranches[i])
                }
                break;
            }
        }
    }

    return updatedBranches
}
export default findUpdatedBranches