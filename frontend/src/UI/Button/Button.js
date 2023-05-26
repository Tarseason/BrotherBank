function Button(props) {
  return(
    <button
      type={props.type || 'button'}
      // onClick={props.onClick}
      // disabled={}
    >
      {props.children}
    </button>
  )
}

export default Button;