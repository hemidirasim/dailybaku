'use client';

import { Menu, Home, Search, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Header({ headerNews }: { headerNews: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      {headerNews}

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <div className="text-2xl font-serif font-bold">XƏBƏR</div>
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <nav className="mt-4 flex items-center justify-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            HOME
          </Link>
          <Link
            href="/category/culture"
            className="hover:text-primary transition-colors"
          >
            CATEGORY LAYOUTS
          </Link>
          <Link href="/tags" className="hover:text-primary transition-colors">
            TAGS LAYOUT
          </Link>
          <Link href="/posts" className="hover:text-primary transition-colors">
            POST STYLES
          </Link>
          <Link href="/module" className="hover:text-primary transition-colors">
            MODULE
          </Link>
          <Link href="/cpt" className="hover:text-primary transition-colors">
            CPT
          </Link>
          <Link href="/404" className="hover:text-primary transition-colors">
            404
          </Link>
        </nav>
      </div>
    </header>
  );
}