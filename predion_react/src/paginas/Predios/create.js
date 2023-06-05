import axios from 'axios';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatório').max(255),
  endereco: Yup.string().required('O endereço é obrigatório').max(255),
  tipo: Yup.string().required('O tipo é obrigatório').max(255),
  numero_pavimentos: Yup.number()
    .required('O número de pavimentos é obrigatório')
    .integer('Digite um número inteiro')
    .min(1, 'O número de pavimentos deve ser maior que zero'),
  ano_construcao: Yup.number()
    .required('O ano de construção é obrigatório')
    .integer('Digite um número inteiro')
    .min(1900, 'O ano de construção mínimo é 1900')
    .max(new Date().getFullYear(), 'O ano de construção máximo é o ano atual'),
  area_total: Yup.number()
    .required('A área total é obrigatória')
    .min(0, 'A área total deve ser maior ou igual a zero'),
  numero_unidades: Yup.number()
    .required('O número de unidades é obrigatório')
    .integer('Digite um número inteiro')
    .min(0, 'O número de unidades deve ser maior ou igual a zero'),
  descricao: Yup.string().required('A descrição é obrigatória').max(255),
  responsavel: Yup.string().required('O responsável é obrigatório').max(255),
  informacoes_adicionais: Yup.string().required('As informações adicionais são obrigatórias').max(255),
});

function Create() {
  const nomeRef = useRef(null);
  const enderecoRef = useRef(null);
  const tipoRef = useRef(null);
  const numeroPavimentosRef = useRef(null);
  const anoConstrucaoRef = useRef(null);
  const areaTotalRef = useRef(null);
  const numeroUnidadesRef = useRef(null);
  const descricaoRef = useRef(null);
  const responsavelRef = useRef(null);
  const informacoesAdicionaisRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      tipo: '',
      numero_pavimentos: '',
      ano_construcao: '',
      area_total: '',
      numero_unidades: '',
      descricao: '',
      responsavel: '',
      informacoes_adicionais: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const json = {
        nome: values.nome,
        endereco: values.endereco,
        tipo: values.tipo,
        numero_pavimentos: values.numero_pavimentos,
        ano_construcao: values.ano_construcao,
        area_total: values.area_total,
        numero_unidades: values.numero_unidades,
        descricao: values.descricao,
        responsavel: values.responsavel,
        informacoes_adicionais: values.informacoes_adicionais,
      };

      try {
        const response = await axios.post('http://localhost:8000/api/predios', json);
        toast('Prédio adicionado com sucesso!');
        setTimeout(() => {
          window.location.href = '/predios'; // Redirecionamento para a página inicial
        }, 1200);
      } catch (erro) {
        toast(`Falha: ${erro}`);
      }
    },
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;

  return (
    <div className="containerc">
      <ToastContainer />
      <form className="form" onSubmit={handleSubmit}>
        Nome: <input name="nome" value={values.nome} onChange={handleChange} onBlur={handleBlur} required /><br />
        {errors.nome && touched.nome && <div>{errors.nome}</div>}<br />

        Endereço: <input name="endereco" value={values.endereco} onChange={handleChange} onBlur={handleBlur} required /><br />
        {errors.endereco && touched.endereco && <div>{errors.endereco}</div>}<br />

        Tipo: <input name="tipo" value={values.tipo} onChange={handleChange} onBlur={handleBlur} required /><br />
        {errors.tipo && touched.tipo && <div>{errors.tipo}</div>}<br />

        Número de Pavimentos: <input name="numero_pavimentos" type="number" value={values.numero_pavimentos} onChange={handleChange} onBlur={handleBlur} required /><br />
        {errors.numero_pavimentos && touched.numero_pavimentos && <div>{errors.numero_pavimentos}</div>}<br />

        Ano de Construção: <input name="ano_construcao" value={values.ano_construcao} onChange={handleChange} onBlur={handleBlur} required /><br />
        {errors.ano_construcao && touched.ano_construcao && <div>{errors.ano_construcao}</div>}<br />

        Área Total: <input name="area_total" type="number" value={values.area_total} onChange={handleChange} onBlur={handleBlur} required /><br />
        {errors.area_total && touched.area_total && <div>{errors.area_total}</div>}<br />

        Número de Unidades: <input name="numero_unidades" type="number" value={values.numero_unidades} onChange={handleChange} onBlur={handleBlur} required /><br />
        {errors.numero_unidades && touched.numero_unidades && <div>{errors.numero_unidades}</div>}<br />

        Descrição: <input name="descricao" value={values.descricao} onChange={handleChange} onBlur={handleBlur} required /><br />
        {errors.descricao && touched.descricao && <div>{errors.descricao}</div>}<br />

        Responsável: <input name="responsavel" value={values.responsavel} onChange={handleChange} onBlur={handleBlur} required /><br />
        {errors.responsavel && touched.responsavel && <div>{errors.responsavel}</div>}<br />

        Informações Adicionais: <input name="informacoes_adicionais" value={values.informacoes_adicionais} onChange={handleChange} onBlur={handleBlur} required /><br />
        {errors.informacoes_adicionais && touched.informacoes_adicionais && <div>{errors.informacoes_adicionais}</div>}<br />

        <button type="submit">Enviar</button>
      </form>
      <Link to='/predios' className="btn btn-secondary mybtn mt-3">Voltar</Link>
    </div>
  );
}

export { Create };
