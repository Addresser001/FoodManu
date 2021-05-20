import { useState } from "react"

const NavBar = ({data, setItems}) => {
    const [isActive, setActive] = useState(false);
    const[foodTitle, setFoodTitle]=useState('All')
    
    const filterAll=()=>{
    
        setItems(data)
        setActive(!isActive);
        setFoodTitle("All")
    }

    const filterBreakfast=()=>{
        let newItems= data.filter((item)=> item.category === 'breakfast');
        setItems(newItems)
        setActive(!isActive);
        setFoodTitle("Breakfast")
        

    }

    const filterLunch=()=>{
        let newItems= data.filter((item)=> item.category === 'lunch');
        setItems(newItems) 
        setActive(!isActive);
        setFoodTitle("Lunch")
    }
    const filterShakes=()=>{
        let newItems= data.filter((item)=> item.category === 'shakes');
        setItems(newItems)
        setActive(!isActive);
        setFoodTitle("Shakes") 
    }


    const handleToggle = () => {
        setActive(!isActive);
    };
    
    return ( 
        <div className="Navigation-container">
            <div className="Mobile">
                <div className="MobileNav">
                    <i class="fa fa-align-left" onClick={handleToggle}></i>
                    <div className="mobileTitle">
                        <h1 >Our Menu</h1>
                        <i class="fa fa-minus"></i>
                    </div>
                </div>
                <h2 className="foodTitle">{foodTitle}</h2>
            </div>
            <div  className={isActive ? "NavBar-mobileShow" : "NavBar-mobileHide"} >
                <span class="material-icons" onClick={handleToggle}>close</span>
                <div className="title">
                    <h1>Our Menu</h1>
                    <i class="fa fa-minus"></i>
                </div>

                <div className="NavButtons">
                    <button onClick={()=>filterAll()}>all</button>
                    <button onClick={()=>filterBreakfast()} >breakfast</button>
                    <button onClick={()=>filterLunch()}>lunch</button>
                    <button onClick={()=>filterShakes()}>shakes</button>
                </div>
            </div>
        </div>
    );
}
 
export default NavBar;