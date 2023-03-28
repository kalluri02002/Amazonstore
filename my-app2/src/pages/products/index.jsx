import {  Typography,  Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callProductListApi } from "../../feutures/productslice";
import { addToCart } from "../../feutures/cardslice";
import "./style.css"

export const Products = () => {
  const dispatch = useDispatch();
  const { productList, isLoading } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(callProductListApi());
  }, [dispatch]);
  console.log(productList, isLoading);
  if (isLoading) {
    return <Typography> Is Loadig Please wait 🙌</Typography>;
  }
  const AddItem = (currenntItem) => {
    dispatch(addToCart(currenntItem));
  };

  return (
    <div className="grid-container"   
      
    >
      {productList && productList.length > 0
        ? productList.map((item) => (
            <div 
              key={item.id}
              className="kall"
            >
              <div
                style={{
                  height: "200px",
                  padding: "10px",
                  borderBottom: "1px solid #d7cccc",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={item.thumbnail}
                  alt=""
                />
              </div>
              <div style={{ display: "flex", padding: "10px" }}>
                <Typography>{item.title}</Typography>
                <Typography>{item.price} INR</Typography>
              </div>
              <div style={{ flex: "1", color: "#6f6c6c", fontSize: "14px" }}>
                <Typography>{item.description}</Typography>
              </div>
              <div>
                <Button onClick={() => AddItem(item)}>Add To Cart</Button>
              </div>
            </div>
          ))
        : null}
     
    </div>
  );
};
