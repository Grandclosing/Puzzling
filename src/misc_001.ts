
/* Puzzle
   Given a time in -hour AM/PM format, convert it to military (24-hour) time.

   Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
         - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/

export function convertTime(s: string): string {
    let hour : number = parseInt(s.slice(0, 2), 10);
    let rest : string = s.slice(2, s.length - 2);
    let format : string = s.slice(-2);
    
    if(format.toLowerCase() === 'am') {
        if(hour === 12) hour = 0;
    } else {
        if(hour !== 12) hour += 12;
    }
    
    return `${hour.toString().padStart(2, '0')}${rest}`;
}

