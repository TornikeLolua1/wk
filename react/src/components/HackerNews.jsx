import{ useState, useEffect, useMemo, useRef } from "react";



const Hackernews = props => {

    const [itemList, setItemList] = useState([]);
    const [lightMode, setLightMode] = useState(true);

    useEffect(()=>{
    const loadNewItem = async () => { 
    let response = await fetch('https://hacker-news.firebaseio.com/v0/maxitem.json');

    let id = await response.json();

    
   if(!itemList.some(item => item.id === id)){
    response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
 
    let item = await response.json();

if(item.type == 'comment'){
  setItemList(prevItemList => [...prevItemList, item]);

}


    console.log(item);
    }

   }

    
  loadNewItem();


const newItemInterval = setInterval(loadNewItem, 10000); 

return () => clearInterval(newItemInterval);


    }, []);

    return <div>
        <h2>Hello Hackernews! </h2>
        <ul>
            {itemList.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    </div>
}

export default Hackernews;