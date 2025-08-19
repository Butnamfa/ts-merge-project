"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("../merge");
describe("merge function", () => {
    it("merges three sorted collections correctly", () => {
        const c1 = [1, 3, 5];
        const c2 = [2, 4, 6];
        const c3 = [9, 7, 0];
        expect((0, merge_1.merge)(c1, c2, c3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
    });
    it("handles empty arrays", () => {
        expect((0, merge_1.merge)([], [], [])).toEqual([]);
        expect((0, merge_1.merge)([1, 2], [], [3, 0])).toEqual([0, 1, 2, 3]);
    });
    it("handles negative numbers", () => {
        const c1 = [-5, -2, 0];
        const c2 = [-3, 1, 4];
        const c3 = [2, -1, -6];
        expect((0, merge_1.merge)(c1, c2, c3)).toEqual([-6, -5, -3, -2, -1, 0, 1, 2, 4]);
    });
});
