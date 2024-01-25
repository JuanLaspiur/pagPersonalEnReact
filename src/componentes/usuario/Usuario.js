export const Usuario =(props)=>{
{/* props es un objeto que contiene todas las propiedades que nosotros le pasemos */}

const {nombre, edad, nacionalidad} = props;
{/* des-estructurar un objeto */}

    return <div><h1>Nombre:{nombre} </h1>
            <p>Edad: {edad}</p>
            <p>Nacionalidad: {nacionalidad}</p>
           </div>
}


  