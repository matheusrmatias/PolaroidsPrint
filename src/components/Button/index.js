import './Button.css'

export const Button = ({func, text, type})=>{

    return(
        <button onClick={func} className='button' type={type}>
                {text}
        </button>
    )
}