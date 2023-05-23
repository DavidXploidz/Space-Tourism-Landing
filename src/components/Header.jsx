import useSpace from '../hooks/useSpace'


export default function Header() {

    const {hola} = useSpace();

  return (
    <div>Header{hola}</div>
  )
}
