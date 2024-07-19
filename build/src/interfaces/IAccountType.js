"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountScheme = void 0;
const zod_1 = require("zod");
exports.AccountScheme = zod_1.z.object({
    id: zod_1.z.number().optional(),
    accountOwner: zod_1.z.string().optional(),
    Balance: zod_1.z.number().optional()
});
