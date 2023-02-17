import '../App.css';

const CostItem = (props) => {
    let {name,sum,id,month,year,category,description}= props.item;

    

  return (

    
    <div className='shadow  my-4 p-4'>


    <div className='carditem'>
    <span>  {name} </span>

    <span> {category}</span>

    {description}
    <span className=""> {sum }</span>
    
    <span>  {month}  / {year}</span>
    </div>

    </div>
  )
}

export default CostItem