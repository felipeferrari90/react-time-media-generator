export default function getMedia(arrayNumbers){
    return (arrayNumbers.reduce((acc,cur) =>  acc += cur)) / arrayNumbers.length
}