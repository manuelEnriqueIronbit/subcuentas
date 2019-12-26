/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../sub-account-edit.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<sub-account-edit></sub-account-edit>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
