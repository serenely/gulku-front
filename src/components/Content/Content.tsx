import React from 'react';
import { ContentContainer} from './styles';
import ProductList from '../Products/Product';

const Content: React.FC = ()=> {

    return(
    <ContentContainer>
      <ProductList />
    </ContentContainer>
    )
}

export default Content;

