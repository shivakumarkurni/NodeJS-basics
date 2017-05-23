var fs= require("fs")
var filePath='./sample.txt'

console.log("Start Reading File !!!")

//  var data=fs.readFile(filePath,function(err,data){

//  	if(err){
//  		console.log(err)
//  	}


// fs.writeFile('./output.txt',data,function(err){
// 	if(err){
// 		console.log(err)
// 	}
// })
// })

var data=fs.readFileSync(filePath)
fs.writeFileSync('uma.txt',data)

 