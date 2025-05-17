import NextAuth from "next-auth";
import { authConfig } from "@/app/lib/auth";

// Create a handler object directly from NextAuth using the config from lib/auth.ts
const handler = NextAuth(authConfig);

// Export the handler functions
export { handler as GET, handler as POST }; 