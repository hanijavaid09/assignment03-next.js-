import React from 'react'

interface propsType{
    title:string;
}
const Heading :React.FC<propsType>= ({title}) => {
  return (
    <div className='text-center text-3xl pb-8'>
      <p className='boredr-b-4 inline-block pb-2'>{title}</p>
    </div>
  )
}

export default Heading
