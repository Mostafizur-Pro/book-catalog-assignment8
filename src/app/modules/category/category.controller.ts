import httpStatus from "http-status";
import { Request, Response } from "express";
import { Category } from "@prisma/client";
import catchAsync from "../../../shared/catchAsync";
import { CategoryService } from "./category.service";
import sendResponse from "../../../shared/sendResponse";

const getAllCategories = catchAsync(async (req:Request, res: Response):Promise<Category[]> => {
    const categories = await CategoryService.getAllCategories();
    sendResponse( res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Categories fetched successfully',
        data: categories
    });

    return categories;
});

const createCategory = catchAsync(async (req:Request, res: Response):Promise<Category> => {
    const category = await CategoryService.createCategory(req.body);
    
    sendResponse( res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Category created successfully',
        data: category
    });

    return category;
});


const getCategoryById = catchAsync(async (req:Request, res: Response):Promise<Category> => {
    const categoryId = req.params.id;
    const category = await CategoryService.getCategoryById(categoryId);

    sendResponse( res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Category fetched successfully',
        data: category
    });

    return category;
});


export const CategoryController = {
    createCategory,
    getAllCategories,
    getCategoryById
}