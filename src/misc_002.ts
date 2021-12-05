
/* Puzzle
   There is a collection of input strings and a collection of query strings. 
   For each query string, determine how many times it occurs in the list of input strings. 
   Return an array of the results.
*/

export const getMatchCounts = (strings : string[], queries : string[]) : number[] => {
    let ret : number[] = [];
    
    for(let i = 0; i < queries.length; ++i) {
        let lastIdx = -1;
        
        do {
            lastIdx = strings.indexOf(queries[i], lastIdx + 1);
            
            if(lastIdx >= 0) 
                ret[i] = ret[i] ? ret[i] + 1 : 1;
        } while (lastIdx !== -1);

        if(!ret[i]) ret[i] = 0;
    }
    
    return ret;
}