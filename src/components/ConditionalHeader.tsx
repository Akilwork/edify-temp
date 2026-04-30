'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';

/**
 * Renders the global Header on all pages.
 */
export default function ConditionalHeader() {
  return <Header />;
}
