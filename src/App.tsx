import HomePage from "./modules/Home/page/HomePage";
import ExperienceAltPage from "./modules/Home/page/ExperienceAltPage";
import ExperienceChoosePage from "./modules/Home/page/ExperienceChoosePage";
import ExperienceCheckoutPage from "./modules/Home/page/ExperienceCheckoutPage";
import ExperienceThanksPage from "./modules/Home/page/ExperienceThanksPage";
import DisclaimerPage from "./modules/Home/page/DisclaimerPage";
import TermsAndConditionsPage from "./modules/Home/page/TermsAndConditionsPage";
import PrivacyPolicyPage from "./modules/Home/page/PrivacyPolicyPage";

export default function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

  if (pathname.startsWith("/experience/choose")) {
    return <ExperienceChoosePage />;
  }

  if (pathname.startsWith("/experience/checkout")) {
    return <ExperienceCheckoutPage />;
  }

  if (pathname.startsWith("/experience/thanks")) {
    return <ExperienceThanksPage />;
  }

  if (pathname.startsWith("/experience")) {
    return <ExperienceAltPage />;
  }

  if (pathname.startsWith("/disclaimer")) {
    return <DisclaimerPage />;
  }

  if (pathname.startsWith("/terms")) {
    return <TermsAndConditionsPage />;
  }

  if (pathname.startsWith("/privacy")) {
    return <PrivacyPolicyPage />;
  }

  return <HomePage />;
}
