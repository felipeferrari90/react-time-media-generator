export default function(props){

    let time = Math.floor(props.time / 1000) 
    let dias = Math.floor(time/24/60/60)
    time %= (60*60*24)
    let horas = Math.floor(time/60/60)
    time %= (60*60)
    let minutos = Math.floor(time/60)
    time %= 60
    time = Math.floor(time)

    return(
        <div className='box'>
            <p>
                o tempo médio de resposta é de <strong>{`
                ${ dias > 0 ? dias+' dias,':''}
                ${ horas > 0 ? horas+' horas,':''}
                ${ minutos > 0 ? minutos+' minutos e ':''}
                ${ time+' segundos.'}
                `}</strong> 
            </p>
        </div>
    )
}