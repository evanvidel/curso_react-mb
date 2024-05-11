const Events = () => {
  const handleMyEvent = (e) => {
    console.log();
    console.log('Ativou o evento');
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso </h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log('clique')}>
          Clique aqui também!
        </button>
        <button
          onClick={() => {
            console.log('Isso não deveria existir =)');
          }}
        >
          Clique aqui, por favor!
        </button>
      </div>
      {renderSomething(false)}
      {renderSomething(true)}
    </div>
  );
};
export default Events;
