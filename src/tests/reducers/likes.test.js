import { likesReducer } from "../../reducers/likes";
import { productDB, testLikes } from "../../fixtures/fixtures";

test("should load likes", () => {
  const action = {
    type: "LOAD_LIKES",
    newLikes: testLikes
  };
  const state = likesReducer([], action);
  expect(state).toEqual(testLikes);
});

test("should remove like", () => {
  const action = {
    type: "TOGGLE_LIKE",
    id: testLikes[0]
  };
  const state = likesReducer(testLikes, action);
  expect(state).toEqual(testLikes.slice(1, testLikes.length + 1));
});

test("should add like", () => {
  const action = {
    type: "TOGGLE_LIKE",
    id: testLikes[0]
  };
  const state = likesReducer(testLikes.slice(1, testLikes.length + 1), action);
  expect(state.sort()).toEqual(testLikes.sort());
});
