import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Edit() {
  const { id } = useParams();
  const [predio, setPredio] = useState({});

  const handleAlertClick = () => {
    toast('Prédio atualizado com sucesso!');
  };

  useEffect(() => {
    async function consultar() {
      const response = await axios.get(`http://localhost:8000/api/predios/${id}`);
      setPredio(response.data.data);
    }
    consultar();
  }, []);

  async function gravar(e) {
    e.preventDefault(); // cancela o submit
    try {
      const response = await axios.put(`http://localhost:8000/api/predios/${id}`, predio);
      handleAlertClick();
      setTimeout(() => {
        window.location.href = '/predios'; // Redirecionamento para a página inicial
      }, 1200);
    } catch (erro) {
        toast(`Falha: ${erro}`);
    }
  }

  return (
    <div class="container">
        <ToastContainer />
      <form className="form" onSubmit={gravar}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            className="form-control"
            value={predio.nome || ''}
            onChange={(e) => {
              setPredio({ ...predio, nome: e.target.value });
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label>
          <input
            id="endereco"
            className="form-control"
            value={predio.endereco || ''}
            onChange={(e) => {
              setPredio({ ...predio, endereco: e.target.value });
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipo">Tipo:</label>
          <input
            id="tipo"
            className="form-control"
            value={predio.tipo || ''}
            onChange={(e) => {
              setPredio({ ...predio, tipo: e.target.value });
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numeroPavimentos">Número de Pavimentos:</label>
          <input
            id="numeroPavimentos"
            className="form-control"
            type="number"
            value={predio.numero_pavimentos || ''}
            onChange={(e) => {
              setPredio({ ...predio, numero_pavimentos: e.target.value });
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="anoConstrucao">Ano de Construção:</label>
          <input
            id="anoConstrucao"
            className="form-control"
            value={predio.ano_construcao || ''}
            onChange={(e) => {
              setPredio({ ...predio, ano_construcao: e.target.value });
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="areaTotal">Área Total:</label>
          <input
            id="areaTotal"
            className="form-control"
            type="number"
            value={predio.area_total || ''}
            onChange={(e) => {
              setPredio({ ...predio, area_total: e.target.value });
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numeroUnidades">Número de Unidades:</label>
          <input
            id="numeroUnidades"
            className="form-control"
            type="number"
            value={predio.numero_unidades || ''}
            onChange={(e) => {
              setPredio({ ...predio, numero_unidades: e.target.value });
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <textarea
          style={{resize:"none"}}
            id="descricao"
            className="form-control"
            value={predio.descricao || ''}
            onChange={(e) => {
              setPredio({ ...predio, descricao: e.target.value });
            }}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="responsavel">Responsável:</label>
          <input
            id="responsavel"
            className="form-control"
            value={predio.responsavel || ''}
            onChange={(e) => {
              setPredio({ ...predio, responsavel: e.target.value });
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="informacoesAdicionais">Informações Adicionais:</label>
          <textarea
          style={{resize:"none"}}
            id="informacoesAdicionais"
            className="form-control"
            value={predio.informacoes_adicionais || ''}
            onChange={(e) => {
              setPredio({ ...predio, informacoes_adicionais: e.target.value });
            }}
            required
          ></textarea>
        </div>

        <button type='submit' class="mt-3">Enviar</button>
      </form>
      <Link to='/predios' class="btn btn-secondary mybtn mt-3">Voltar</Link>
    </div>
  );
}

export { Edit };
