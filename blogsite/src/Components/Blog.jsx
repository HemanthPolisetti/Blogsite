import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const Blog = ({title,desc,user,image}) => {
    console.log(title)
  return (
    <div className=' flex justify-center items-center pt-2'>
    <Card className="py-4 w-2/4 h-2/12  bg-current">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold text-white">{title}</p>
      <h4 className="text-large text-white ">{desc}</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <div className='flex justify-center'>
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={image}
        width={270}
        
      />
      </div>
    </CardBody>
  </Card>
  </div>
  )
}
export default Blog
