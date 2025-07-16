function Hello({name,age,address}){
    
       return(
        
        // items.map((item) => {
        //     return(
        // <h1>Hello from {item}</h1>
        //     )
        // })
        <> 
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>Address: {address}</h1>
        </>
        
    )
    
    
}

export default Hello