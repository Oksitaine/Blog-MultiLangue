import readingTime from "reading-time"
import { DateTime } from "luxon"

export const getReadingTime = (text: string, local: string) => {
    const minutes = readingTime(text).minutes
    const minutesRounded = Math.floor(minutes)

    if( local === "de" ){
        if(minutesRounded === 1 || minutesRounded === 0){
            return `${minutesRounded} Minute`
        } else {
            return `${minutesRounded} Minuten`
        }
    } else {
        if(minutesRounded === 1 || minutesRounded === 0){
            return `${minutesRounded} minute`
        } else {
            return `${minutesRounded} minutes`
        }
    }
}

export const getRealiveDate = (date: string, local: string) => {
    return DateTime.fromISO(date).setLocale(local).toRelative()
}