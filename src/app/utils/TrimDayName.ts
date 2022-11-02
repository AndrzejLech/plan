
export class TrimDayName {
  trim(dayName: string) {
    let dayNameStrings = dayName.split(' ')
    return (dayNameStrings[1])
  }

  trimToDay(dayName: string) {
    let dayNameStrings = this.trim(dayName)
    let date = dayNameStrings.split('.')
    return (Number(date[0]))
  }

  trimToMonth(dayName: string){
    let dayNameStrings = this.trim(dayName)
    let date = dayNameStrings.split('.')
    return (Number(date[1]))
  }

  trimToYear(dayName: string) {
    let dayNameStrings = this.trim(dayName)
    let date = dayNameStrings.split('.')
    return (Number(date[2]))
  }
}
