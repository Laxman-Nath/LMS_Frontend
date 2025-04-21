export const SubmitButton=({children,type="submit",onClick})=>{
    return(
    <div className="text-center"> <button onClick={onClick} className="bg-green-600 rounded-md text-3xl border-2 border-solid border-slate-400 p-2 hover:scale-90 transition-all ease-in-out duration-[1200ms] w-[70%] mt-4 hover:bg-red-500 text-white" type={type}>
    {children}
</button>
</div>
    )
}