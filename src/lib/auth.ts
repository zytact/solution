import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/server/db/index';
import { passkey as passkeyPlugin } from 'better-auth/plugins/passkey';
import {
    user,
    session,
    verification,
    account,
    passkey,
} from '@/server/db/schema';

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'pg',
        schema: {
            user,
            session,
            verification,
            account,
            passkey,
        },
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },
    plugins: [passkeyPlugin()],
});
