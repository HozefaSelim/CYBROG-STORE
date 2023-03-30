import "./Products.css";
import React, { useState, useEffect} from "react";
import { ListCard } from "../../components/index";
import { SectionWrapper, SectionHeader } from "../../components/index";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Category = [
    "all",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];
  const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  };
  useEffect(() => {
    getData("https://fakestoreapi.com/products").then((data) =>
      setProducts(data)
    );
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div id="products">
      <SectionWrapper>
        <SectionHeader>Our Products</SectionHeader>
        <div className="product-header">
          <div className="input-group ">
            <div className="form-outline">
              <input
                placeholder="Search With Category"
                onChange={handleChange}
                value={searchInput}
                type="search"
                className="form-control"
              />
            </div>
          </div>
          <div className="filter">
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                color: "var(--color-dark)",
              }}
            >
              {Category[selectedItem]}
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {Category.map((e, index) => (
                <MenuItem
                  sx={{
                    "&:hover": {
                      color: "var(--color-primary)",
                    },
                  }}
                  key={index}
                  selected={selectedItem === index}
                  onClick={() => setSelectedItem(index)}
                >
                  {e}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
        <ListCard
          items={products
            .filter((product) => product.title.includes(searchInput))
            .filter((product) =>
              selectedItem !== 0
                ? product.category === Category[selectedItem]
                : true
            )}
        />
      </SectionWrapper>
    </div>
  );
};

export default Products;
