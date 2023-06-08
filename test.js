const getDate = (fech) => {
    
  var date = new Date()
  var daytoset = fech
  console.log(daytoset)
  var currentDay = date.getDay();
  var distance = (daytoset + 7 - currentDay) ;
  date.setDate(date.getDate() + distance);
  return date
  
}


let fechas = [{dia: 1},{ dia: 5}]
console.log(fechas)
for (let index = 0; index < fechas.length; index++) {
    console.log(getDate(fechas[index].dia))
    
}