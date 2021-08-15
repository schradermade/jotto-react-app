
/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

import { ShallowWrapper } from "enzyme"

// FUNCTION TO REUSE IN ALL TEST FILES //
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}