


function Topping({
  id, children, ...restProps
}) {
  return (
    <div>
      <input 
        id={id} 
        type="checkbox" 
        name="Topping"
        {...restProps}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}

export default Topping;

