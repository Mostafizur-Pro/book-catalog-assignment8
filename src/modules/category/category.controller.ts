import httpStatus from "http-status";
import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { CategoryService } from "./category.service";
import { Category } from "@prisma/client";


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

export const CategoryController = {
    createCategory
}