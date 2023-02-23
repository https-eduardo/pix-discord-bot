import * as dotenv from 'dotenv';
dotenv.config();

// Cast env to variables be disconsiderated as possibly undefined
const { DISCORD_TOKEN, DISCORD_CLIENT_ID, API_BASE_URL, DISCORD_GUILD_ID } = process.env as Record<string, string>;

export { DISCORD_TOKEN, API_BASE_URL, DISCORD_CLIENT_ID, DISCORD_GUILD_ID };