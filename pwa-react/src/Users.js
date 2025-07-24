import react,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';


function Users(){
    const [data,setData]=useState([]);
    const [mode, setMode]=useState('online');

    useEffect(()=>{
        const url='https://jsonplaceholder.typicode.com/users';
        fetch(url).then((response)=>{
            response.json().then((result)=>{
                console.log(result);
                setData(result);
                localStorage.setItem("users",JSON.stringify(result))
            }).catch((error)=>{
                alert("you are in offline mode")
                setMode('offline')
                // let collection=localStorage.getItem("users");
                // setData(JSON.parse(collection))
            })
        })

    },[])
    return(
        <div>
            {mode==="offline"?<div class="alert alert-light" role="alert">
  you are in offline mode
</div>:null}
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