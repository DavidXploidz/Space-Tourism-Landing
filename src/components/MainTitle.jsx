
export default function MainTitle({number, title}) {
  return (
    <div>
        <h2 className='destination__title'><span className='destination__title destination__title--span'>{number}</span>{title}</h2>
    </div>
  )
}
