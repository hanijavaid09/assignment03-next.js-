import React from 'react'

const Order = () => {
  return (
   
    
    <div className='space-y-8' style={{
        paddingLeft:'500px',
        paddingTop:'70px'
    }}>
         <div>
        
        <h1 className='text-4xl font-medium text-left'>Place Your Order:</h1>
    </div>
        
        <div className='flex flex-col gap-1'>
            <label htmlFor="name">NAME</label>
            <input type="text" className='h-[40px] w-[300px] md bg-white border border-accent' style={{textAlign:'center'}} />


        </div>

        <div className='flex flex-col gap-1'>
            <label htmlFor="email">EMAIL</label>
            <input type="text" className='h-[40px] w-[300px] md bg-white border border-accent' style={{textAlign:'center'}} />
            

        </div>

        <div className='flex flex-col gap-1'>
            <label htmlFor="text">YOUR FLAVOUR</label>
            <input type="text" className='h-[40px] w-[300px] md bg-white border border-accent' style={{textAlign:'center'}} />
            

        </div>

        <div className='flex flex-col gap-1 center' >
          <button className='bg-black h-[35px] w-[170px] text-white text-center'>PLACE YOUR ORDER</button>
            

        </div>
      
    </div>
  )
}

export default Order
