export default function getTimeDifference(tempoinicial, tempofinal){
    const dateInicio = new Date(tempoinicial)
    const dateFinal = new Date(tempofinal)
    return dateFinal - dateInicio
}