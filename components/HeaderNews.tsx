import { supabase } from '@/lib/supabase';
import Link from 'next/link';

async function getLatestArticles() {
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .order('published_at', { ascending: false })
    .limit(3);

  return articles || [];
}

export default async function HeaderNews() {
  const articles = await getLatestArticles();

  if (articles.length === 0) return null;

  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center gap-4 overflow-x-auto scrollbar-hide">
        <span className="text-sm font-bold whitespace-nowrap flex items-center gap-2">
          <span className="bg-white text-black px-2 py-1 text-xs">LATEST</span>
        </span>
        <div className="flex items-center gap-6 text-sm">
          {articles.map((article, index) => (
            <div key={article.id} className="flex items-center gap-6">
              <Link
                href={`/article/${article.slug}`}
                className="whitespace-nowrap hover:text-primary transition-colors truncate"
              >
                {article.title}
              </Link>
              {index < articles.length - 1 && (
                <span className="text-gray-400">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}