import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Delete() {
  const { id } = useParams();
  const [predios, setPredio] = useState({});
  const [status, setStatus] = useState('');
  const [botaoStatus, setBotaoStatus] = useState(true);
  const handleAlertClick = () => {
    toast('Prédio deletado!');
  };

  useEffect(() => {
    async function consultar() {
      const response = await axios.get(`http://localhost:8000/api/predios/${id}`);
      setPredio(response.data.data);
      setBotaoStatus(false);
    }
    consultar();
  }, []);

  async function confirmar(e) {
    try {
      const response = await axios.delete(`http://localhost:8000/api/predios/${id}`);
      handleAlertClick();
      setPredio({});
      status = "deleted";
      setTimeout(() => {
        window.location.href = '/predios'; // Redirecionamento para a página inicial
      }, 1200);
    } catch (erro) {
        toast(`Falha: ${erro}`);
    }
  }

  return (
    <div className="container">
        <ToastContainer />
      <h3>{predios.nome}</h3>
      <p>Endereço: {predios.endereco}</p>
      <p>Tipo: {predios.tipo}</p>
      <p>Número de Pavimentos: {predios.numero_pavimentos}</p>
      <p>Ano de Construção: {predios.ano_construcao}</p>
      <p>Área Total: {predios.area_total}</p>
      <p>Número de Unidades: {predios.numero_unidades}</p>
      <p>Descrição: {predios.descricao}</p>
      <p>Responsável: {predios.responsavel}</p>
      <p>Informações Adicionais: {predios.informacoes_adicionais}</p>

      {status !== 'deleted' ? (
        <button className='btn btn-danger' onClick={confirmar} disabled={botaoStatus}>
          Confirmar Exclusão
        </button>
      ) : (
        ''
      )}

      <Link to="/predios" className='btn btn-secondary mybtn mt-3'>Voltar</Link>
    </div>
  );
}

export { Delete };
