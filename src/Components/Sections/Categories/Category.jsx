import React from 'react'
import SectionHeading from '../Heading/SectionHeading'
import Card from '../../Cards/Card'

function Category({ title, data }) {
  return (
    <div className="my-8">
      <SectionHeading title={title} />

      {/* Flex container for Cards */}
      <div className="flex flex-wrap gap-1 justify-start">
        {data?.map((item, index) => (
          <Card
            key={index}
            imageSrc={item.imageSrc}
            imageTitle={item.title}
            description={item.description}
            actionArrow={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Category