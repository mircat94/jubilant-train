import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";

import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";

const OrderDetail = ({ user }) => {
  return (
    <React.Fragment>
      <Typography
        variant={"body2"}
        color="text.primary"
        style={{
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        Ship to
      </Typography>
      <Typography
        variant={"body1"}
        color="text.primary"
        style={{
          textAlign: "left",
        }}
      >
        {user.first_name} {user.last_name}
      </Typography>
      <Typography
        variant={"body2"}
        color="text.primary"
        style={{
          textAlign: "left",
        }}
      >
        {user.address} {user.city}, {user.state}, {user.zip}
      </Typography>
    </React.Fragment>
  );
};
const Products = ({ product, id }) => {
  console.log(product);
  if (!product) {
    return <></>;
  } else {
    return (
      <React.Fragment key={id}>
        <ListItem>
          <ListItemSecondaryAction style={{ fontSize: "12px" }}>
            x{product.quantity}
          </ListItemSecondaryAction>
          <ListItemAvatar>
            <Avatar alt={product.product_name} src={product.product_image} />
          </ListItemAvatar>
          <ListItemText
            primary={product.product_name}
            secondary={`$${product.product_price}`}
          />
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  }
};
const UserCard = ({ order, handleClose }) => {
  const { order: user, products } = order;
  if (products && user) {
    return (
      <Card style={{ minWidth: "500px", maxWidth: "1000px" }}>
        <CardHeader
          title={`Order Details`}
          subheader={`${user.order_status}`}
          action={
            <IconButton aria-label="settings" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
        />

        <CardContent style={{ padding: "16px 16px" }}>
          <OrderDetail user={user} />
        </CardContent>

        <CardContent style={{ padding: "16px" }}>
          <Typography variant="overline">
            {" "}
            Order Placed on {user.purchase_date}
          </Typography>
          <Divider />
          <List>
            {products &&
              products.map((product, index) => (
                <Products product={product} key={index} />
              ))}
          </List>
        </CardContent>
      </Card>
    );
  } else {
    return null;
  }
};

export default UserCard;
