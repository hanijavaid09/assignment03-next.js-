import Image from 'next/image';
import React from 'react'

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags:string[];
}

const Card :React.FC<propsType>= ({title,desc,img,tags}) => {
    return(
        
        <div className='border border-gray-300 rounded-lg p-4'>
            <div>
            <Image className='rounded-lg'
            src={img}
            width={300}
            height={300}
            alt={title}/>
            </div>
            <div className='p-4 space-y-4'>
                <div className='text-4xl font-bold'>{title}</div>
                <div>{desc}</div>
                
                </div>
            </div>
    
    )
}

export default Card
