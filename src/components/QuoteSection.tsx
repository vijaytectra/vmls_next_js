export default function QuoteSection() {
  return (
    <section className="py-4 md:py-6 px-[5%] bg-[#a31f34] text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Quotation Marks Icon */}
        <div className="flex justify-center">
          <svg 
            width="40" 
            height="30" 
            viewBox="0 0 60 45" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-40"
          >
            <path 
              d="M13.5 45C9.375 45 5.8125 43.5 2.8125 40.5C0.9375 38.625 0 35.8125 0 32.0625C0 24.5625 2.625 17.0625 7.875 9.5625L13.125 0H25.5L16.125 17.4375C19.5 17.625 22.125 19.125 24 21.9375C25.875 24.75 26.8125 28.125 26.8125 32.0625C26.8125 35.8125 25.5 38.8125 22.875 41.0625C20.25 43.3125 17.125 44.4375 13.5 44.4375V45ZM46.5 45C42.375 45 38.8125 43.5 35.8125 40.5C33.9375 38.625 33 35.8125 33 32.0625C33 24.5625 35.625 17.0625 40.875 9.5625L46.125 0H58.5L49.125 17.4375C52.5 17.625 55.125 19.125 57 21.9375C58.875 24.75 59.8125 28.125 59.8125 32.0625C59.8125 35.8125 58.5 38.8125 55.875 41.0625C53.25 43.3125 50.125 44.4375 46.5 44.4375V45Z" 
              fill="white"
            />
          </svg>
        </div>

        {/* Quote Text */}
        <blockquote className="space-y-4">
          <p className="font-playfair text-xl md:text-2xl lg:text-3xl leading-snug italic">
            "Constitution is not a mere lawyer's document, it is a vehicle of life and its spirit is always the spirit of the age."
          </p>
          <footer className="font-inter text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase opacity-80">
            — B. R. AMBEDKAR
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
