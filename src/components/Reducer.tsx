import useCount from "../hooks/useCount";

export function Reducer() {
  const [state, dispatch] =  useCount()

  return (
    <div>
       <h2>{state.count}</h2>
       <button onClick={()=> dispatch({ type: "Add"})}> Incremente </button>
       <button onClick={()=> dispatch({ type: "Sub"})}>  Decremente </button>
    </div>
  );
}
