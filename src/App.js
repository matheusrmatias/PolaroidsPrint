import './App.css';
import { Polaroid } from './components/Polaroid';
import { useState } from 'react';
import { ImageRange } from './components/ImageRange';
import { Button } from './components/Button';

function App() {

  const [image, setImage] = useState();
  const [zoomY, setZoomY] = useState();
  const [zoomX, setZoomX] = useState();
  const [polaroids, setPolaroids] = useState([]);



  return (
    <div className="App">
      <form onSubmit={
        e => {
          e.preventDefault()
          if (!zoomX) {
            setZoomX(0)
          }
          if (!zoomY) {
            setZoomY(0)
          }
          if (polaroids.length < 6) {
            image && setPolaroids(
              [...polaroids, { image, zoomX, zoomY }]
            )
          }
          setImage()
          setZoomX()
          setZoomY()
        }
      }>
        <header className='polaroid-main-header'>
          <div className='polaroid-box'>
            
            <div className='polaroid'>
              <Polaroid image={image} setImage={setImage} zoomX={zoomX} zoomY={zoomY} clear={true} setZoomX={setZoomX} setZoomY={setZoomY}/>
              <ImageRange title='X' image={image} zoom={zoomX} setZoom={setZoomX} />
              <ImageRange title='Y' image={image} zoom={zoomY} setZoom={setZoomY} />
            </div>
          </div>

          <div className='header-text'>
            <p>Clique na polaroid para adicionar uma imagem.</p>
            <p>Clique em adicionar para colocar a polaroid na lista e em imprimir para imprimir a lista de polaroids.</p>
            <div className='button-container'>
              <Button text='Adicionar' />
              <Button type='button' text='Imprimir' func={() => {
                window.print()

              }} />
            </div>
            <div className='button-container'>
              <Button text='Limpar lista' func={()=>{
                setPolaroids([])
              }}/>
            </div>
          </div>

        </header>

      </form>
      <main className='polaroid-main'>
        <div className='polaroid-list'>
          {
            polaroids.map(
              polaroid => (
                <Polaroid
                  key={URL.createObjectURL(polaroid.image)}
                  image={polaroid.image} zoomX={polaroid.zoomX} zoomY={polaroid.zoomY} />)
            ) 
          }
        </div>
      </main>
      <footer className='main-footer'>
          <a href='https://github.com/matheusrmatias' rel="author" target='blank'>Feito por MatheusMatias © 2023</a>
      </footer>
    </div>
  );
}

export default App;