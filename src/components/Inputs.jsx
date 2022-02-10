import '../styles/FormInput.css'

export default (props) => {

    return (
        
        <div className="form-input">
           <label>tempo inicial</label>
           <input type="datetime-local" id={'tempo-inicial-'+props.formId} placeholder={'tempo inicial n '+props.formId} />
           <label>tempo final</label>
           <input type="datetime-local" id={'tempo-final-'+props.formId} placeholder={'tempo final n '+props.formId}/>
        </div>
    )
}