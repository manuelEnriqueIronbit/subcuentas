/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../sub-account-register.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<sub-account-register></sub-account-register>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
