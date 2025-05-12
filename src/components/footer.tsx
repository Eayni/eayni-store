import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="mt-5">
      <Separator />
      <div className="my-5 text-center text-sm opacity-50">
        <a
          href="https://sfgco.sa/"
          target="_blank"
          className="text-sm opacity-50"
        >
          <span className="text-sm opacity-50">دعم وتطوير ❤️ </span>
          <span className="text-sm opacity-50">
            مستقبل الاستدامة الخضراء للاستثمار
          </span>
        </a>
      </div>
    </footer>
  );
};
