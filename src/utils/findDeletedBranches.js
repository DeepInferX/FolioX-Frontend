const findDeletedBranches = ({newBranches, orginalBranches}) => {
    const deletedBranches = []

    for(let i = 0; i < orginalBranches.length; i++){
        let isDeleted = true
        for(let j = 0; j < newBranches.length; j++){
            if(orginalBranches[i].id === newBranches[j].id){
                isDeleted = false
                break
            }
        }
        
        if(isDeleted){
            deletedBranches.push(orginalBranches[i])
        }
    }

    return deletedBranches
}

export default findDeletedBranches