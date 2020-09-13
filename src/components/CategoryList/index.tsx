import React from 'react';

import {
  Container,
  Category,
  CategoryImage,
  CategoryName,
  RedCircle,
  CategoryStatus,
  CategoryStatusText,
} from './styles';

import content from './content';

const CategoryList: React.FC = () => {
  return (
    <Container>
      {content.map(category => (
        <Category key={category.name}>
          <CategoryImage source={category.source} />
          <CategoryName>{category.name}</CategoryName>
          <CategoryStatus>
            <RedCircle />
            <CategoryStatusText>57.8K</CategoryStatusText>
          </CategoryStatus>
        </Category>
      ))}
    </Container>
  );
};

export default CategoryList;
