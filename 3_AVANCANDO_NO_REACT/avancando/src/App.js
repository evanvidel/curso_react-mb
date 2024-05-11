import './App.css';
import { useState } from 'react';
import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const userName = 'Maria';

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0 },
    { id: 2, brand: 'Kia', color: 'Branco', newCar: false, km: 34343 },
    { id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 234 },
  ];

  function showMessage() {
    console.log('Evento de componente pai');
  }

  const [message, setMessage] = useState('');

  const handleMessage = (msg) =>{
    setMessage(msg)
  }
  return (
    <div className='App'>
      <h1>Avançando no React</h1>
      {/* Imagem em public */}
      <div>
        <img src='/img1.jpg' alt='Paisagem' />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt='Cidade' />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand='VW' km={10000} color='azul' newCar={false} />
      {/* reaproveitamento */}
      <CarDetails brand='Ford' km={0} color='vermelha' newCar={true} />
      <CarDetails brand='Fiat' km={4500} color='Branco' newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      {/* fragments */}
      <Fragment propsFragment='teste' />
      {/* children */}
      <Container myValue='testing'>
        <p>este é o conteudo da children</p>
      </Container>
      <Container myValue='testing 2'>
        <h4>testenado container</h4>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
