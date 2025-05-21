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
      <div className="w-full max-w-2xl mx-auto p-4 border rounded-md shadow-md bg-danger space-y-6">
        <div>صفحه غير موجود</div>
      </div>
    );
  }
  return (
    <Suspense fallback={<TabsSkeleton />}>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-blue-50 border-b border-blue-100 px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {page?.title_ar}
            </h1>
            <p className="text-gray-500 mt-2">{page?.updatedAt}</p>
          </div>
          <div className="p-8">
            <div className="mb-8 border-b border-gray-100 pb-6">
              <p className="text-gray-600 leading-relaxed">
                <p>{page?.content_ar}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
