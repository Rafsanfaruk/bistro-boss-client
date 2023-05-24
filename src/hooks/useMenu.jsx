import { useEffect, useState } from "react";

const useMenu =() =>{
    const [menu, setMenu] = useState([]);
    const [loading,setLoading] =useState(true);

    useEffect(() => {
      fetch("menu.json")
        .then((res) => res.json())
        .then((data) => {
        //   const popularItems = data.filter((item) => item.category === "popular");
          setMenu(data);
          setLoading(false);
        });
    }, []);
    return [menu,loading]

}

export default useMenu;