"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    const collection3Asc = [];
    for (let i = collection_3.length - 1; i >= 0; i--) {
        collection3Asc.push(collection_3[i]);
    }
    const merged = [];
    let i = 0, j = 0, k = 0;
    while (i < collection_1.length || j < collection_2.length || k < collection3Asc.length) {
        const val1 = i < collection_1.length ? collection_1[i] : Infinity;
        const val2 = j < collection_2.length ? collection_2[j] : Infinity;
        const val3 = k < collection3Asc.length ? collection3Asc[k] : Infinity;
        if (val1 <= val2 && val1 <= val3) {
            merged.push(val1);
            i++;
        }
        else if (val2 <= val1 && val2 <= val3) {
            merged.push(val2);
            j++;
        }
        else {
            merged.push(val3);
            k++;
        }
    }
    return merged;
}
