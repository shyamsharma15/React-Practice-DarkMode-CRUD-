import { useState,useEffect, useRef ,keys,Object} from "react";

function Counter() {

    const [number, setNumber] = useState(0);
    let num = useRef(0);

    function handleClick(e) {

        e.stopPropagation();
        setNumber(number + 1);
        // setNumber(number=>number+1);
        // setNumber(number=>number+1);
        // setNumber(number=>number+1);
        num.current++;
        console.log(num.current);

    }

    //    const fibfunctionMemoized = useCallback(function fib(n){
    //     if(n===1 || n===2){
    //         return 1;
    //     }
    //     return fib(n-1) + fib(n-2);
    //    },[])


    //const fibMemoized = useMemo(()=>fibfunctionMemoized(number),[number,fibfunctionMemoized])

    return (
        <>

            <h1 style={{ color: 'white' }}>{number}</h1>
            <button onClick={handleClick}>ADD</button>
           

        </>
    )

}

export default Counter;