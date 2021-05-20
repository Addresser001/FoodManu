const DataTemplate = ({items}) => {
    return ( 
        <div className="Main-container">
            {items.map((menuItem)=>{
                const {id, title, img, desc, price} =menuItem;
                return(
                    <article key={id}  className='menu-item'>
                        <img src={img} alt={title} className='food' />
                        <div className='item-info'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'>${price}</h4>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
     );
}
 
export default DataTemplate;