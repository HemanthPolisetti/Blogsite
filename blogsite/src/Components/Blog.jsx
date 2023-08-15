import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
const Blog = ({title,desc,user,image}) => {
    console.log(title)
  return (
    <div className=' flex justify-center items-center pt-2'>
    <Card className="py-4 w-2/4 h-2/12">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">{user}</p>
      <small className="text-default-500">{title}</small>
      <h4 className="font-bold text-large">{desc}</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={image}
        width={270}
      />
    </CardBody>
  </Card>
  </div>
  )
}
export default Blog
