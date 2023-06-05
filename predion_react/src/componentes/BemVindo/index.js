function Welcome(props) {
  
    return (
      <div>
        <h1>Sejam Bem-vindos!</h1>
        <br></br>
        <table class="table table-bordered table-dark">
        <thead>
          <tr><th class="p-3">Nome</th><th  class="p-3">RA</th></tr></thead>
          {props.nomes.map((nome, index) => (
            <tr>
              <td style={{padding:"12px",color:"black"}} key={index}>{nome}</td> 
              <td style={{padding:"12px",color:"black"}}>{props.ras[index]}</td>
          </tr>
          ))}
        </table>
      </div>
    );

  }
  
  export default Welcome;