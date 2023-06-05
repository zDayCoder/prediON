import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Predios() {
  const [predios, setPredios] = useState([]);

  useEffect(() => {
    async function consultar() {
      const resposta = await axios.get('http://localhost:8000/api/predios');
      console.log(resposta);
      setPredios(resposta.data.data);
    }

    consultar();
  }, []);

  const chunks = Array(Math.ceil(predios.length / 3)).fill().map((_, index) => {
    const start = index * 3;
    return predios.slice(start, start + 3);
  });

  return (
    <div className="container" style={{ height: 'auto'}}>
      {chunks.map((chunk, rowIndex) => (
        <div className="row" key={rowIndex}>
          {chunk.map((predio) => (
            <div className="mx-auto d-flex justify-content-center col" key={predio.id}>
              <div className="card border-dark" style={{ maxWidth: '22rem', borderWidth: '3px' }}>
                {predio.tipo === 'Residencial' ? (
                  <img src="https://www.tecnisa.com.br/blog/wp-content/uploads/2019/05/Tecnisa_Arariba_Fachada_R01_otimizada-1024x957.jpg" className="card-img-top" alt="Imagem do prédio residencial" />
                ) : predio.tipo === 'Comercial' ? (
                  <img src="https://portoimagem.files.wordpress.com/2011/05/01-5.jpg?w=640" className="card-img-top" alt="Imagem do prédio comercial" />
                ) : (
                  <img src="https://www.curtamais.com.br/uploads/midias/ac400c13f9eed5bdf444d37423bcab85.jpg" className="card-img-top" alt="Imagem do prédio público" />
                )}
                <div className="card-body text-success">
                  <h5 className="card-title" style={{ color: '#007bff!important', marginTop: '-8px' }}>
                    {predio.nome} - {predio.area_total}m²
                  </h5>
                  <p style={{ marginTop: '-12px' }}>
                    {predio.tipo} - {predio.ano_construcao}
                  </p>
                  <p style={{ marginTop: '-18px', color: '#2681d1' }}>{predio.numero_pavimentos} andares</p>
                  {predio.numero_unidades > 0 && (
                    <p style={{ marginTop: '-18px', color: '#2681d1' }}>
                      Unidades disponíveis: {predio.numero_unidades}
                    </p>
                  )}
                  <p></p>
                  <h6 style={{ color: '#2681d1', marginTop: '-12px' }}>{predio.endereco}</h6>
                  <hr style={{ marginTop: '-6px' }} />
                  <p className="card-text" style={{ color: '#17a2b8!important', marginTop: '-12px' }}>
                    {predio.descricao}
                  </p>
                  <p className="card-text" style={{ color: '#5a6269!important', marginTop: '-12px' }}>
                    {predio.informacoes_adicionais}
                  </p>
                  <hr style={{ marginTop: '-12px' }} />
                  <p className="card-text" style={{ color: '#5a6269!important', marginTop: '-12px' }}>
                    <font style={{ color: '#000' }}>Responsável: </font>
                    {predio.responsavel}
                  </p>
                </div>
              </div>

              <div className="d-flex align-items justify-content-center flex-column" style={{ marginLeft: '3px', zIndex: 9999 }}>
                <Link to={`/predios/edit/${predio.id}`} className="btn btn-warning" style={{ marginBottom: '8px', color: 'white' }}>
                  Editar
                </Link>
                <Link to={`/predios/delete/${predio.id}`} className="btn btn-danger">
                  Excluir
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '12px', marginBottom: '4px' }}>
        <a className="btn btn-success mb-3" href="/predios/create">
          Novo Prédio
        </a>
      </div>
    </div>
  );
}

export default Predios;
