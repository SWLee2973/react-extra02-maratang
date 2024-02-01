


function Toping({
  id, value, children, onCheckToping
}) {
  return (
    <div>
      <input 
        type="checkbox" 
        id={id} 
        name="Toping" 
        onChange={onCheckToping}
        value={value}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}

export default Toping;

