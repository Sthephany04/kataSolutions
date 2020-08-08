// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

const filter_list = l => {
  let elements = [];
  l.forEach(elem => {
    if (Number.isInteger(elem)){
      elements.push(elem);
    }    
  })  
  return elements;
}