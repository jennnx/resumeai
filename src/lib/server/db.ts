import { DATABASE_URL } from '$env/static/private';
import { neon } from '@neondatabase/serverless';

export const db = neon(DATABASE_URL);
