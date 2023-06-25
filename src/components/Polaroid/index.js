import './Polaroid.css'

export const Polaroid = ({image,setImage,zoomX,zoomY, setZoomX,setZoomY,clear})=>{
    
    const imgPosition = `${zoomX?zoomX:0}px ${zoomY?zoomY:0}px`;

    return(
        <div className='polaroid-container'>
            {
                image?<img 
                style={{objectPosition: imgPosition}}
                className='polaroid-image'
                src={URL.createObjectURL(image)}
                alt='Polaroid'></img>:
                <div>
                    <label htmlFor='file'></label>
                    <input
                        type='file'
                        accept='.png, .jpg'
                        name='file'
                        id='file'
                        onChange={
                            e => setImage(e.target.files[0])
                        }
                    >
                    </input>
                </div>
            }
            {clear&&image?<button onClick={e=>{
                setImage()
                setZoomX()
                setZoomY()
            }} className='btn-clear'>Limpar</button>:''}
        </div>
    )
}