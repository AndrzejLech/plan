export class TrimDayName{
  trim(dayName : string){
    let dayNameStrings = dayName.split(' ')
    return(dayNameStrings[1])
  }
}
