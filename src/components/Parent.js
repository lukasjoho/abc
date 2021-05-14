import CChild from "./test"

function Mock(props) {
  const cref = useRef()

  const handleClick = e => {
    cref.current.setFromOutside("HELLO from Parent")
  }
  return (
    <div>
      <button onClick={handleClick}>Show Me!</button>
      <CChild ref={cref} />
    </div>
  )
}
