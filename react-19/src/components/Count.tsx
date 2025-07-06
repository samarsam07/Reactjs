import { useActionState } from "react"
const increment=async (previousState: number,formData: { get: (arg0: string) => any; })=>{
    console.log(formData.get("name"));
    return previousState + 1;
}
const Count = () => {
    const [state,formAction] = useActionState(increment,0)
  return (
    <form>
        <h1 className="text-3xl"> {state}</h1>
        <button formAction={formAction}  className="bg-teal-300 p-2" >increment</button>

        <br />
        <input type="text" placeholder="enter your name" className="border-2" name="name" />
    </form>
  )
}

export default Count