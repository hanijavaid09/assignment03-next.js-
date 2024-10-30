import React from 'react'
import Heading from './heading'
import Card from './card'


const data =[
    {
        id:1,
        title:"Our Making",
        desc:"The process of making coffee begins with the growth of a plant. If unprocessed coffee seeds are sown, they can germinate and turn into coffee plants. Seeds are usually sown in large shaded beds. Once the beans have been dried, roasted and ground, they can be used to prepare the humble zip.",
        img:"/newcoffee1.jfif",

    },

    {
        id:2,
        title:"Our Procedure",
        desc:"Pour 8 oz. milk onto the grounds and stir to saturate all of the grounds. Allow the grounds to steep in the milk for at least four minutes. Then, slowly plunge the french press as you would normally. Pour and enjoy. Use this time and coffee-to-milk ratio as a starting point.",
        img:"/newcoffee2.jfif",
    },

    {
        id:3,
        title:"Our Coffee Specialist",
        desc:"Think of yourself as a coffee detective, searching for the best and most delicious beans from around the world, testing and analysing their flavours and aromas, and ensuring that they meet the highest standards of quality and consistency.",
        img:"/newcoffee3.jfif",
    }
]
const About = () => {
  return (
  <div id='about' className='container pt-32'>
    <Heading title='ABOUT US' />
    <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-item-center '>{data.map((el)=>(<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img} tags={[]}    />))}</div>
    
  </div>
  )
}

export default About
