import { Quote } from "./db";

const quothSeedData = [
  {
    quote: "I cannot abide a sugared Cheerio. -Erin Burns-Korth",
    quoter: "Jackary",
  },
];

const seedData = async () => {
  await Quote.create(quothSeedData[0]);
};

export default seedData;
