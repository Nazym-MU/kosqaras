import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

// Function to check if user is authenticated
export async function checkAuth() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/admin/login");
  }
  
  return session;
}

// Function to check if user has admin role
export async function checkAdmin() {
  const session = await getServerSession(authOptions);
  
  if (!session || session.user?.role !== "admin") {
    redirect("/admin/login");
  }
  
  return session;
}
