import React from 'react';
import styled from 'styled-components';
import Collection from '../collection/collection';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

function CollectionPage() {
  return (
    <PageContainer>
      <Title>Here are your collections</Title>
      <Collection/>
    </PageContainer>
  );
}

export default CollectionPage;
