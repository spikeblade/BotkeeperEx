"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountScheme = void 0;
const zod_1 = require("zod");
exports.AccountScheme = zod_1.z.object({
    id: zod_1.z.number().optional(),
    accountId: zod_1.z.number().optional(),
    type: zod_1.z.enum(['debit', 'credit']),
    cost: zod_1.z.number().optional(),
    amount: zod_1.z.number().optional(),
    dateTime: zod_1.z.date().optional(),
});
