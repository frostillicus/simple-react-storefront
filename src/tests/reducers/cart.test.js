import { cartReducer } from "../../reducers/cart";
import { productDB, initCart, testLikes } from "../../fixtures/fixtures";

test("should add new item to cart", () => {
  const newItem = productDB[5];
  const action = {
    type: "ADD_TO_CART",
    id: newItem.id
  };
  const state = cartReducer(initCart, action);
  expect(state).toEqual([...initCart, { id: newItem.id, quantity: 1 }]);
});

test("should add existing item to cart and increment quantity", () => {
  const existingItem = productDB[1];
  const oldQuantity = initCart.filter(item => item.id === existingItem.id)[0]
    .quantity;
  const action = {
    type: "ADD_TO_CART",
    id: existingItem.id
  };
  const state = cartReducer(initCart, action);
  expect(state).toContainEqual({
    id: existingItem.id,
    quantity: oldQuantity + 1
  });
});

test("should increment existing item", () => {
  const existingItem = productDB[1];
  const oldQuantity = initCart.filter(item => item.id === existingItem.id)[0]
    .quantity;
  const action = {
    type: "INCREMENT_ITEM",
    id: existingItem.id
  };
  const state = cartReducer(initCart, action);
  expect(state).toContainEqual({
    id: existingItem.id,
    quantity: oldQuantity + 1
  });
});

test("should decrement existing item", () => {
  const existingItem = productDB[1];
  const oldQuantity = initCart.filter(item => item.id === existingItem.id)[0]
    .quantity;
  const action = {
    type: "DECREMENT_ITEM",
    id: existingItem.id
  };
  const state = cartReducer(initCart, action);
  expect(state).toContainEqual({
    id: existingItem.id,
    quantity: oldQuantity - 1
  });
});

test("should delete item", () => {
  const existingItem = productDB[2];
  const action = {
    type: "DELETE_ITEM",
    id: existingItem.id
  };
  const state = cartReducer(initCart, action);
  expect(state).toEqual(
    expect.not.arrayContaining([
      { id: existingItem.id, quantity: existingItem.quantity }
    ])
  );
});

test("should load cart", () => {
  const action = {
    type: "LOAD_CART",
    newCart: initCart
  };
  const state = cartReducer([], action);
  expect(state).toEqual(initCart);
});

test("should empty cart", () => {
  const action = {
    type: "EMPTY_CART"
  };
  const state = cartReducer(initCart, action);
  expect(state).toEqual([]);
});
