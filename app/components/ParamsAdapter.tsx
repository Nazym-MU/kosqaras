"use client";

import { useParams } from 'next/navigation';

/**
 * Client-side component to adapt potentially problematic route params to client components
 * This resolves issues with passing route params from Server Components to Client Components
 */
export default function ParamsAdapter({ children }: { children: (params: Record<string, string>) => React.ReactNode }) {
  const params = useParams();
  
  // Convert the params object to a simple Record
  const paramsRecord: Record<string, string> = {};
  for (const [key, value] of Object.entries(params)) {
    // Handle both string and string[] cases
    paramsRecord[key] = Array.isArray(value) ? value[0] ?? "" : value ?? "";
  }
  
  return <>{children(paramsRecord)}</>;
}
