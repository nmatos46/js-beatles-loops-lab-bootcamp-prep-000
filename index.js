function theBeatlesPlay(musicPPL,musicTools){
  var arr = [] //to hold all strings created in for loop
  var str = "" //to hold strings to push into arr
  
  for (var i=0; i < musicPPL.length; i++){
    str = musicPPL[i] + " plays " + musicTools[i]
    arr.push(str)
  }
  return arr
}

function johnLennonFacts(facts){
  var arr = [] //to hold all strings created in while loop
  var str = "" //to hold string created in one loop iteration
  var i = 0 //counter used in while loop condition statement
 
  while (i < facts.length){
    arr.push(facts[i]) 
    i++
  }
}