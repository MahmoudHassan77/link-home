import { useEffect, useState } from 'react'

function useFetch(initalState,url) {
    const [data,setData] =useState(initalState)
    const getData = async()=>{
        try{
            const response = await fetch(`https://api.npoint.io/${url}`);
            const obj = await response.json();
                setData({...obj});
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getData();
    },[url])
 return {data};
}

export default useFetch