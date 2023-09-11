import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProductsRequest, fetchUserDataRequest, removeFromData, setCurrentPage } from "../../redux/actions/actions";
import { Product } from "../../utils/interface";
import { LoadingOutlined } from "@ant-design/icons";
import ReactPaginate from "react-paginate";
import {
  ButtonStyled,
  ButtonStyledRemoved,
  CardStyled,
  CardStyledOne,
  LinkStyled,
  ListItemTextPrimary,
  ListItemTextSecondary,
  ProductContainer,
  StyledImage
} from "./styles";
import { RootState } from "../../redux/store";

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const productItems = useSelector((state: RootState) => state.products.productItems);
  const user = useSelector((state: RootState) => state.user?.user);
  const currentPage = useSelector((state: RootState) => state.pagination.currentPage);

  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = productItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleRemove = (productId: string, token: string) => {
    dispatch(removeFromData(productId, token));
  };

  useEffect(() => {
    dispatch(fetchProductsRequest());
    dispatch(fetchUserDataRequest());
  }, []);

  if (isLoading) {
    return <LoadingOutlined style={{ width: "50px", height: "50px" }} />;
  }

  return (
    <ProductContainer>
      <Typography variant="h4" color={"white"}>
        Products
      </Typography>
      <CardStyledOne>
        {displayedProducts?.map((product) => (
          <div key={product?._id}>
            {user?.isAdministrator && (
              <div style={{ width: "100%", display: "flex", justifyContent: "right" }}>
                <ButtonStyledRemoved
                  type="button"
                  onClick={() => handleRemove(product._id, user.token)}
                >
                  X
                </ButtonStyledRemoved>
              </div>
            )}
            <LinkStyled href={`/products/${product?._id}`}>
              <Button>
                <CardStyled variant="outlined">
                  <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <StyledImage src={product?.imageUrl} />
                  </div>
                  <ListItemTextPrimary>{product?.title}</ListItemTextPrimary>
                  <ListItemTextSecondary secondary={`Price: $${product?.price}`} />
                </CardStyled>
              </Button>
            </LinkStyled>
            <div>
              <ButtonStyled
                type="button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </ButtonStyled>
            </div>
          </div>
        ))}
      </CardStyledOne>
      <div className="pagination-container">
        <ReactPaginate
          pageCount={Math.ceil(productItems.length / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={(data) => handlePageChange(data.selected + 1)}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </ProductContainer>
  );
};

export default ProductList;
