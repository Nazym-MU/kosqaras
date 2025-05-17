"use client";
import { useLanguage } from "@/app/contexts/LanguageContext";
import type { MultilingualString } from "@/types/artwork";

/**
 * A component that displays multilingual content in the current language or falls back to English
 */
export default function MultiLangContent({ 
  content, 
  className = "" 
}: { 
  content: MultilingualString | string | undefined, 
  className?: string 
}) {
  const { language } = useLanguage();
  
  // Handle null or undefined content
  if (!content) {
    return <span className={className}></span>;
  }
  
  // Handle string content
  if (typeof content === 'string') {
    return <span className={className}>{content}</span>;
  }
  
  // Check if content is a valid MultilingualString object
  if (typeof content !== 'object') {
    return <span className={className}></span>;
  }
  
  // Show content in the current language if available, otherwise fall back to English
  // Add fallback to empty string if neither language version exists
  const textToDisplay = 
    (language in content && content[language]) ? 
    content[language] : 
    (content.en || '');
  
  return (
    <span className={className}>{textToDisplay}</span>
  );
}
