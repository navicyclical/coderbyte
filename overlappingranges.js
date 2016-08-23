function firstRange(arr){
  var firstRange = [];
  for (var i = arr[0]; i <= arr[1]; i++){
    firstRange.push(i);
  }
  return firstRange;
}

function secondRange(arr){
  var secondRange = [];
  for (var i = arr[2]; i <= arr[3]; i++){
    secondRange.push(i);
  }
  return secondRange;
}

function OverlappingRanges(arr){
  var count = 0;
  var overlap = arr[4];
  var firstSet = firstRange(arr);
  var secondSet = secondRange(arr);
  for (var i = 0; i <= firstSet.length; i++){
    var firstNumber = firstSet[i];
    for (var j = 0; j <= secondSet.length; j++){
      var secondNumber = secondSet[j];
      if (firstNumber === secondNumber){
        count++;
      }
    }
    console.log(count);
  }
  if (count >= overlap){
    return true;
  }
  return false;
}
