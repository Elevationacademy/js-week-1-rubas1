const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let temp=genes[2]
genes[2]=genes[4]
genes[4]=temp
temp=genes[3]
genes.splice(3,1)
genes.push(temp,temp)
console.log(genes)
