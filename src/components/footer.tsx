import { ThemeToggle } from "./theme-toggle";

export const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Logo and Info */}
          <div className="flex-1 flex flex-col gap-4">
            <span className="font-extrabold text-sm tracking-tight mb-2">
              جمعية عيني لإعادة التدوير التعاونية
            </span>
            <p className="text-xs text-gray-400">
              تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية برقم 10069
            </p>
            <ThemeToggle />
          </div>
          {/* Contact */}
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="font-semibold text-sm mb-2 ">تواصل معنا</h3>
            <p className="text-sm flex items-center gap-2">
              <svg
                width="16"
                height="16"
                fill="currentColor"
                className="text-gray-400"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8zm0 14.5C4.36 14.5 1.5 11.64 1.5 8S4.36 1.5 8 1.5 14.5 4.36 14.5 8 11.64 14.5 8 14.5z" />
              </svg>
              6710 شارع الأمير تركي، اليرموك، الخبر 34423، المملكة العربية
              السعودية
            </p>
            <p className="text-sm flex items-center gap-2">
              <svg
                width="16"
                height="16"
                fill="currentColor"
                className="text-gray-400"
              >
                <path d="M3.654 1.328a.678.678 0 0 1 .737-.073l2.548 1.273a.678.678 0 0 1 .291.291l1.273 2.548a.678.678 0 0 1-.073.737l-1.2 1.2a11.042 11.042 0 0 0 4.95 4.95l1.2-1.2a.678.678 0 0 1 .737-.073l2.548 1.273a.678.678 0 0 1 .291.291l1.273 2.548a.678.678 0 0 1-.073.737l-1.2 1.2c-1.2 1.2-3.2 1.2-4.4 0-1.2-1.2-1.2-3.2 0-4.4l1.2-1.2z" />
              </svg>
              0509444514
            </p>
            <p className="text-sm flex items-center gap-2">
              <svg
                width="16"
                height="16"
                fill="currentColor"
                className="text-gray-400"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-.5A.5.5 0 0 0 1.5 4v.217l6.5 4.2 6.5-4.2V4a.5.5 0 0 0-.5-.5H2zm13 1.383-6.293 4.073a1 1 0 0 1-1.414 0L1 4.883V12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V4.883z" />
              </svg>
              sales@eayni.org
            </p>
          </div>
          {/* Links */}
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="font-semibold text-sm mb-2">روابط هامة</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/page/privacy"
                  className="text-gray-400 hover:text-white transition"
                >
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a
                  href="/page/shipping"
                  className="text-gray-400 hover:text-white transition"
                >
                  الشحن والتوصيل
                </a>
              </li>
              <li>
                <a
                  href="/page/terms"
                  className="text-gray-400 hover:text-white transition"
                >
                  الشروط والأحكام
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Payment Methods */}
      <div className="border-t border-gray-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-400 mb-2">طرق الدفع المقبولة</p>
            <div className="flex flex-wrap gap-4">
              <img
                src="/images/payments/apple-pay.png"
                alt="Apple Pay"
                width={40}
              />
              <img
                src="/images/payments/Master.png"
                alt="MasterCard"
                width={40}
              />
              <img src="/images/payments/Visa.png" alt="Visa" width={40} />
              <img src="/images/payments/Mada.svg" alt="Mada" width={40} />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-3 mt-4 md:mt-0">
              {/* Social icons placeholder */}
              {/* <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition"><svg ... /></a> */}
            </div>
            <div className="text-gray-500 text-xs mt-2">
              &copy; {new Date().getFullYear()} جمعية عيني لإعادة التدوير
              التعاونية. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
