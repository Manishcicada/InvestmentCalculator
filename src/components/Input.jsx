export default function Input({children, onChangeValue}){
  return(
    <div>
      <label>{children}</label>
      <input type= 'number' required onChange={onChangeValue}></input>
    </div>
  )
}