// This file re-exports auth from the app/lib/auth.ts for compatibility
import { auth, signIn, signOut } from "@/app/lib/auth";
import { redirect } from "next/navigation";

// Function to check if user is authenticated
export async function checkAuth() {
  const session = await auth();
  
  if (!session) {
    redirect("/admin/login");
  }
  
  return session;
}

// Function to check if user has admin role
export async function checkAdmin() {
  const session = await auth();
  
  if (!session || session.user?.role !== "admin") {
    redirect("/admin/login");
  }
  
  return session;
}

export { auth, signIn, signOut };
