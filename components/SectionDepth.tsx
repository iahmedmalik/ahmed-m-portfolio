/** Decorative perspective studies, kept outside the reading and focus order. */
export default function SectionDepth(){
  return <div className="section-depth" aria-hidden="true"><div className="depth-plane depth-plane-back"/><div className="depth-plane depth-plane-side"/><svg viewBox="0 0 600 600" fill="none">{Array.from({length:12},(_,i)=><ellipse key={i} cx="300" cy="300" rx={110+i*12} ry={65+i*13} transform={`rotate(${i*3-25} 300 300)`}/>)}</svg></div>;
}
