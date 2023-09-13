"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_route_1 = require("../modules/category/category.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/categories',
        routes: category_route_1.CategoryRoutes,
    },
    // {
    //   path: '/users',
    //   routes: userRoutes,
    // },
    // {
    //   path: '/profile',
    //   routes: profileRoutes,
    // },
    // {
    //   path: '/categories',
    //   routes: categoryRoutes,
    // },
    // {
    //   path: '/books',
    //   routes: bookRoutes,
    // },
    // {
    //   path: '/orders',
    //   routes: orderRoutes,
    // },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
