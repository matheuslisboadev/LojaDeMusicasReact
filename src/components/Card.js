import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: rgba(255,255,255,0.4);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.2);
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 1em;
  color: #555;
`;

const Card = ({ title, description, imageUrl }) => (
  <CardContainer>
    <Image src={imageUrl} alt={title} />
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardContainer>
);

export default Card;