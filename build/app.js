"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.NODE_DOCKER_PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// route for health check
app.get('/health_check', function (_, res) {
    return res.status(200).send({
        code: 200,
        message: 'healthy'
    });
});
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("Server started on port : " + PORT);
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
void start();
