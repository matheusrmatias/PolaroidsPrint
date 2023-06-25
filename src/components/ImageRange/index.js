import './ImageRange.css'

export const ImageRange = ({title, image, zoom, setZoom})=>{
    return (
        <div className='image-range'>
            {title}<input disabled={image ? false : true} value={zoom?zoom:0} type='range' max={100} min={-100}
                onChange={

                    e => {
                        setZoom(e.target.value)
                    }
                }
                onDoubleClick={e =>{
                    setZoom(0)
                }
                    
            }
            ></input><input disabled={image ? false : true} className='reset' type='button' value='Reset' onClick={
                e =>{
                    setZoom(0)
                }
            }></input>
        </div>
    )
}