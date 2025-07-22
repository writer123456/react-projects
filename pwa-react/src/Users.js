import react,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';


function Users(){
    const [data,setData]=useState([]);

    useEffect(()=>{
        const url='https://jsonplaceholder.typicode.com/users';
        fetch(url).then((response)=>{
            response.json().then((result)=>{
                console.log(result);
                setData(result);
            })
        })

    },[])
    return(
        <div>
            <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((rowData,index)=>
            (<tr key={index} className="width-full">
                <td>{rowData.id}</td>
                <td>{rowData.name}</td>
                <td>{rowData.phone}</td>
                <td>{rowData.email}</td>
            </tr>)
        )
           
        }
        
        
      </tbody>
    </Table>
        </div>
    )

}
export default Users