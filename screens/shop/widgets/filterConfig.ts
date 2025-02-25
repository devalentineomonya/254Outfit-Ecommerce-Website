import { z } from "zod";

export const filterSchema = z
  .object({
    categories: z.array(z.string()).optional(),
    price: z.object({
      min: z.number().nullable().optional(),
      max: z.number().nullable().optional(),
    }),
    sizes: z
      .array(
        z.tuple([z.string(), z.number()])
      )
      .optional(),
    brands: z.array(z.string()).optional(),
    colors: z
      .array(
        z.tuple([z.string(), z.number()])
      )
      .optional(),
  })
  .superRefine((data, ctx) => {
    const hasFilters =
      (data.categories && data.categories.length > 0) ||
      (data.sizes && data.sizes.length > 0) ||
      (data.brands && data.brands.length > 0) ||
      (data.colors && data.colors.length > 0) ||
      data.price?.min !== null ||
      data.price?.max !== null;

    if (!hasFilters) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one filter must be selected",
        path: ["root"],
      });
    }

    if (data.price?.min && data.price?.max) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Minimum price cannot be greater than maximum price",
        path: ["price"],
      });
    }
  });

export type FilterFormValues = z.infer<typeof filterSchema>;

type FilterTuple = [string, number];

export const filterConfig: {
  categories: string[];
  sizes: FilterTuple[];
  brands: string[];
  colors: FilterTuple[];
} = {
  categories: [
    "Accessories",
    "Cooking",
    "Electronics",
    "Fashion",
    "Furniture",
    "Health & Beauty",
    "Home & Garden",
    "Smartphones",
    "Toy & Games",
  ],
  sizes: [
    ["Extra Large", 2],
    ["Large", 4],
    ["Medium", 0],
    ["Small", 0],
  ] as [string, number][],
  brands: ["Elegant Auto Group", "Green Grass", "Node Node"],
  colors: [
    ["Black", 9],
    ["Blue", 2],
    ["Dark Blue", 2],
    ["Dark Gray", 1],
    ["Gray", 2],
    ["Green", 1],
    ["Light Blue", 1],
    ["Light Dark", 2],
    ["Light Gray", 9],
    ["Light Orange", 1],
    ["Light Pink", 1],
    ["Orange", 1],
    ["Red", 3],
    ["Yellow", 3],
  ] as [string, number][],
};
