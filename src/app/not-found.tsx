import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-[#a31f34]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-playfair">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600 font-inter">Sorry, we couldn't find the page you're looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-[#a31f34] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#801829] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a31f34] transition-colors"
          >
            Go back home
          </Link>
          <Link href="/contact-us" className="text-sm font-semibold text-gray-900 hover:text-[#a31f34] transition-colors">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
