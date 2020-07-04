import React from "react";
import { shallow } from "enzyme";
import ThankYouPage from "../../components/ThankYouPage";

test("should render ThankYouPage correctly", () => {
  const wrapper = shallow(<ThankYouPage />);
  expect(wrapper).toMatchSnapshot();
});
