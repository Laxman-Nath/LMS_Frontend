export const SubmitButton=({children,type="submit",onClick})=>{
    return(
    <div className="text-center"> <button onClick={onClick} className="bg-green-500 rounded-md text-2xl border-2 border-solid border-slate-400 p-2 hover:scale-90 transition-all ease-in-out duration-[1200ms] w-fit " type={type}>
    {children}
</button>
</div>
    )
}