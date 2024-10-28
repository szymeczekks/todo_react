export default function Button({children, onClick}) {
    return <button className="p-2 px-5 rounded-lg bg-cyan-950 text-white hover:text-cyan-950 hover:bg-cyan-400 transition-colors" onClick={onClick}>{children}</button>
}