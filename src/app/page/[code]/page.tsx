import { TabsSkeleton } from "@/components/products/skeleton";
import { getPageById } from "@/services";
import { Suspense } from "react";

export default async function InternalPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const resolvedParams = await params;
  const page = await getPageById(resolvedParams.code);
  if (!page?.code) {
    return (
      <div className="w-full max-w-2xl mx-auto p-8 border-2 border-red-300 dark:border-red-700 rounded-2xl shadow-lg bg-red-50 dark:bg-red-950 flex flex-col items-center space-y-4 mt-16">
        <svg
          width="48"
          height="48"
          fill="none"
          viewBox="0 0 24 24"
          stroke="red"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="text-lg font-semibold text-red-700 dark:text-red-300">
          صفحه غير موجود
        </div>
      </div>
    );
  }
  return (
    <Suspense fallback={<TabsSkeleton />}>
      <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-16 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-green-100 dark:border-green-900">
          <header className="bg-gradient-to-r from-green-100 to-green-200 dark:from-gray-800 dark:to-gray-900 border-b border-green-200 dark:border-green-900 px-10 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-extrabold text-green-900 dark:text-green-300 drop-shadow-sm">
                {page?.title_ar}
              </h1>
              <p className="text-green-600 dark:text-green-400 mt-2 text-sm">
                {page?.updatedAt}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="green"
                strokeWidth="1.5"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="green"
                  strokeWidth="1.5"
                  fill="white"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h8M12 8v8"
                />
              </svg>
              <span className="text-green-700 dark:text-green-300 font-medium">
                معلومات الصفحة
              </span>
            </div>
          </header>
          <main className="p-10">
            <article className="prose prose-lg max-w-none text-gray-800 dark:text-gray-100 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: page?.content_ar }} />
            </article>
          </main>
        </div>
      </section>
    </Suspense>
  );
}
