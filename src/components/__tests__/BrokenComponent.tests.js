import { shallow } from "enzyme";
import BrokenComponent from "../BrokenComponent";

describe("BrokenComponent", () => {
  it("should throw an error on render", () => {
    expect(() => shallow(<BrokenComponent />)).toThrowError(
      "This component failed to render!"
    );
  });
});
