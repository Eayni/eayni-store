import { ThemeToggle } from "./theme-toggle";

export const Footer = () => {
  return (
    <footer className=" ">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              {/* Company Logo */}

              <a
                href="https://sfgco.sa/tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://eayni-assets.s3.us-east-1.amazonaws.com/poweredbysfgco.png"
                  alt="aws-secure-site"
                  width="160"
                  // style={{ maxWidth: "100%" }}
                />
              </a>
            </div>
            <span className="font-bold text-xl ">
              جمعية عيني لإعادة التدوير التعاونية
            </span>
            <p className="text-sm text-gray-400 mb-4">
              تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية برقم 10069
            </p>
            <ThemeToggle />
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <div className="space-y-2">
              <p className="text-sm flex items-center">
                6710 شارع الأمير تركي، اليرموك، الخبر 34423، المملكة العربية
                السعودية
              </p>
              <p className="text-sm flex items-center">0509444514</p>
              <p className="text-sm flex items-center">sales@eayni.org</p>
            </div>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-lg">روابط هامه</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/page/privacy"
                  className="text-gray-400 transition duration-300"
                >
                  سياسه الخصوصيه
                </a>
              </li>
              <li>
                <a
                  href="/page/shipping"
                  className="text-gray-400  transition duration-300"
                >
                  الشحن والتوصيل
                </a>
              </li>

              <li>
                <a
                  href="/page/terms"
                  className="text-gray-400  transition duration-300"
                >
                  الشروط والاحكام
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          {/* Payment Icons */}
          <div className="flex flex-col items-center">
            <p className="text-gray-400 mb-4">طرق الدفع المقبولة</p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <img src="/images/payments/apple-pay.png" alt="" width={40} />
              <img src="/images/payments/Master.png" alt="" width={40} />
              <img src="/images/payments/Visa.png" alt="" width={40} />
              <img src="/images/payments/Mada.svg" alt="" width={40} />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm pt-4">
            <div className="text-center mt-3"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
