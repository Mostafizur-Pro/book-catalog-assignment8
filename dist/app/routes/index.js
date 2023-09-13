"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_route_1 = require("../modules/category/category.route");
const user_routes_1 = require("../modules/user/user.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        routes: auth_routes_1.authRoutes,
    },
    {
        path: '/categories',
        routes: category_route_1.CategoryRoutes,
    },
    {
        path: '/users',
        routes: user_routes_1.userRoutes,
    },
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
