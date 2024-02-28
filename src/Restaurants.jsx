import Card from './Card'
import data  from './data.json'
function Projects(){


    return(
        <>
        {data.map((item)=> (
            <>
                <Card item={item} />
            </>
        ))}
         </>  
    );
}

export default Projects