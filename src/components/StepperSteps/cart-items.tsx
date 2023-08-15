import Image from "next/image";
import { BiTrash } from "react-icons/bi";
import { CompanyContext, useCart } from "../../context";
import { CartItemType } from "../../context/Cart/types";

import {
  Aside,
  MainSection,
  Totals,
  Wrapper,
  Text,
  ProductContent,
  ProductValue,
  Title,
} from "./styles";
import { IProduct, IProductCategories } from "../../types";
import { useContext, useEffect, useState } from "react";
import { productCategoryService } from "../../services";
interface CategorySelector {
  filter: string;
}

export function CartItems({ filter }: CategorySelector) {
  const company_id = useContext(CompanyContext);
  const { cartItems, deleteItemFromCart, cartTotalPrice } = useCart();
  const [categories, setCategories] = useState<IProductCategories[]>([]);

  useEffect(() => {
    productCategoryService
      .getAll(company_id, {})
      .then((res) => setCategories(res.data));
  }, [company_id]);

  const combinedArray = [].concat(...categories.map((cat) => cat.products));
  const filteredArray = combinedArray.filter(
    (item) => item.highlighted === true
  );
  console.log(filteredArray);
  return (
    <Wrapper>
      <MainSection>
        <Title>Detalhes da Compra</Title>
        {cartItems.length === 0 ? <Text>Carrinho Vazio!</Text> : null}
        {cartItems.map((item: CartItemType) => (
          <div key={item.product_id}>
            <ProductContent>
              <Image
                src={item.url_banner}
                alt={item.url_banner}
                width={60}
                height={60}
              />{" "}
              | -<Text>{item.title}:</Text>
            </ProductContent>
            <ProductValue>
              <Text> {item.amount}x</Text>
              <Text>R$ {(item.amount * item.value).toFixed(2)}</Text>
              {/* <BtnAddOrRemove product={item} /> */}
              <button onClick={() => deleteItemFromCart(item.product_id)}>
                <BiTrash />
              </button>
            </ProductValue>
          </div>
        ))}
        <Totals>
          <Text>Total: </Text>{" "}
          <Text> R$ {cartTotalPrice.replace(".", ",")} </Text>
        </Totals>
      </MainSection>
      <Aside>
        <Text>Você talvez goste desses produtos!</Text>
        {/* //{combinedArray.map((product) => product.filter(product))} */}
      </Aside>
    </Wrapper>
  );
}
