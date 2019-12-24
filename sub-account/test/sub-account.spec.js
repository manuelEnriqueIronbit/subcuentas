/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../sub-account.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<sub-account></sub-account>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
