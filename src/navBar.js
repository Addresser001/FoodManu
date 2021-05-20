import { useState } from "react"

const NavBar = ({data, setItems}) => {
    const [isActive, setActive] = useState(false)

    const filterAll=()=>{
    
        setItems(data)
        setActive(!isActive);
    
    }

    const filterBreakfast=()=>{
        let newItems= data.filter((item)=> item.category === 'breakfast');
        setItems(newItems)
        setActive(!isActive);

    }

    const filterLunch=()=>{
        let newItems= data.filter((item)=> item.category === 'lunch');
        setItems(newItems) 
        setActive(!isActive);
    }
    const filterShakes=()=>{
        let newItems= data.filter((item)=> item.category === 'shakes');
        setItems(newItems)
        setActive(!isActive); 
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