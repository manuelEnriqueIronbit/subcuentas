/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../sub-account-view.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<sub-account-view></sub-account-view>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
