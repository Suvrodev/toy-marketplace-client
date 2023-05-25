import { useEffect } from "react";

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title}-Toy market`;
    },[title])

}

export default useTitle;