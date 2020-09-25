//helper function that splits a given array into chuncks of a given size, in the case of this app the size will be 2
//not used in this app anymore but might be handy for another project

export const chunkArray = (array, size) => {
    return array.reduce((chunks, current, i) => {
        //push the current value as a new array on the end of the accumulated chunk array if the remainder of the index when divided by the size is equal to zero
        if (i % size === 0) {        
        chunks.push([current])
        //push the current value on the end of one of the chunk arrays at the given index 
        } else {
        chunks[chunks.length - 1].push(current)
        }
        return chunks
    }, [])
}
