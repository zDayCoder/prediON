import BemVindo from "../../componentes/BemVindo";
function Home() {

    const nomes = ["Daniel Alves","Endrews Azevedo","Ryan Figueiredo"];
    const ras = ["1290482313026","1290482123011","1290482123016"];

    return(
        <div style={{padding:"16px"}}>
            <BemVindo nomes={nomes} ras={ras}/>
        </div>
    )
}
export default Home