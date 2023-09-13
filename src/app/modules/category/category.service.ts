import { Category } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";


const createCategory = async (payload: Category): Promise<Category> => {
    const isExist = await prisma.category.findFirst({
      where: {
        title: payload.title,
      },
    });
    if (isExist) {
      throw new Error('Category already exists');
    }
    const category = await prisma.category.create({
      data: payload,
    });
    return category;
  };

  const getAllCategories = async (): Promise<Category[]> => {
    const categories = await prisma.category.findMany({});
    if (categories.length <= 0) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Categories not found');
    }
    return categories;
};

const getCategoryById = async ( categoryId: string ): Promise<Category> => {
  const category = await prisma.category.findUnique({
      where: {
          id: categoryId
      },
      include: {
          books: true
      }
  });
  if (!category) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Category not found');
  }

  return category;
};

export const CategoryService = {
    createCategory,
    getAllCategories,
    getCategoryById
}