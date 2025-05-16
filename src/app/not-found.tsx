// pages/404.js
import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <Head>
        <title>لم يتم العثور على الصفحة | 404</title>
        <meta
          name="description"
          content="لم نتمكن من العثور على الصفحة التي تبحث عنها"
        />
      </Head>

      <div className="max-w-md w-full text-center">
        {/* Error code and illustration */}
        <div className="relative">
          <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </div>

        {/* Error message */}
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
          لم يتم العثور على الصفحة
        </h2>
        <p className="mt-4 text-base text-gray-600">
          عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما نُقلت أو
          أنها غير موجودة.
        </p>

        {/* Action buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
