const TemplateExpressions = () => {
  const name = 'Matheus';
  const data = {
    age: 31,
    job: 'Programador',
  };
  return (
    <div>
      <h1>olá {name}, tudo bem? </h1>
      <p>Você atua como: {data.job}</p>
      {4 + 4}
      <p>{console.log('JSX React')}</p>
    </div>
  );
};
export default TemplateExpressions;
