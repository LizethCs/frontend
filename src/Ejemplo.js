import './Ejemplo.css'

function Ejemplo(){
   return(
    <div className="container">
        <table className="table table-striped table-bordered table-hover">
        <thead className="thead">
          <tr>
             <th>Firstname</th>
             <th>Lastname</th>
             <th>Email</th>
          </tr>
        </thead>

       <tbody className='tbody'>
         <tr>
            <td className='john'>jhon</td>
            <td>Doe</td>
            <td className='danger'>jhonNoDoe@hotpail.com</td>
         </tr>
       </tbody>


        </table>

    </div>
   )
}
export default Ejemplo;