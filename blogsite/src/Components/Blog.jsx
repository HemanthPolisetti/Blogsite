import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const Blog = ({title,desc,image}) => {
  return (
    <div className=' flex justify-center items-center pt-2'>
    <Card className="py-4 w-2/4 h-2/12  bg-current">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-large uppercase font-bold text-white">{title}</p>
      <h4 className="text-medium text-white pl-4">{desc}</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <div className='flex justify-center'>
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={image}
        width={340}
        
      />
      </div>
    </CardBody>
  </Card>
  </div>
  )
}
export default Blog
