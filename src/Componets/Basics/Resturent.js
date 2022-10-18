import React, {useState} from 'react';
import "./style.css"
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList = [
    ...new Set(
        Menu.map((currentElement)=>{
            return currentElement.category
        })
    ),
    "All",
];

const Resturent = () => {
    
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) =>{

        if (category==="All"){
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((currentElement)=>{
            return currentElement.category === category;
        });

        setMenuData(updatedList);
    };
  
  return <div>
      {/* <h1>Banti Da Dabbha</h1> */}

        
      <Navbar filterItem = {filterItem} menuList={menuList}/>
      <MenuCard menuData = {menuData}/>
  </div>;
};

export default Resturent;
