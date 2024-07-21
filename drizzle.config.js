/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-interview-mocker_owner:wMhG8leC0cdW@ep-silent-dream-a1aar00a.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require",
  },
};
