import { prisma } from "./prisma.js";

export const city = async (name) => {
  try {
    const newCity = await prisma.city.create({
      data: {
        name,
      },
    });
    const newHistory = await prisma.history.createMany({
      data: [
        {
          cityId: newCity.id,
        },
      ],
    });
  } catch (error) {
    throw error;
  } finally {
    prisma.$disconnect;
  }
};

export const seeHistory = async () => {
  try {
    const citiesWithHistories = await prisma.city.findMany({
      include: {
        histories: true,
      },
    });
   return citiesWithHistories
  } catch (error) {
    throw error;
  } finally {
    prisma.$disconnect;
  }
};
