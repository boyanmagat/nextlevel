export interface FAQItem {
    question: string;
    answer: string;        // Concise version for Service Pages
    detailedAnswer?: string; // Extended version for Main FAQ Page
    category: string;
}

export const NEXT_JS_FAQS: FAQItem[] = [
    {
        question: "Will switching to Next.js negatively impact my SEO?",
        answer: "No, quite the opposite. Next.js is engineered for SEO dominance, ensuring search engines crawl your full content instantly to lower your Customer Acquisition Cost (CAC).",
        detailedAnswer: "No. In fact, moving to Next.js is one of the most effective strategies for driving organic revenue. Unlike standard React apps that search engines struggle to index, Next.js uses Server-Side Rendering (SSR). This means we hand Googlebot a fully optimized HTML page instantly. Combined with an edge network and automatic image optimization, your Core Web Vitals will turn green, directly boosting your ranking and capturing high-intent search traffic.",
        category: "Next.js"
    },
    {
        question: "Why choose Next.js over traditional WordPress?",
        answer: "Speed, Security, and Scalability. Traditional WordPress relies on heavy plugins that bleed revenue. Next.js delivers pre-built, optimized pages instantly.",
        detailedAnswer: "It comes down to maximizing your conversion rate and minimizing your operational risk. WordPress was built for blogging in 2003. It relies on a stack of heavy plugins that slow down your checkout and open up costly security vulnerabilities. Next.js separates your content from your code, meaning your site loads instantly, is fundamentally resilient against plugin hacks, and seamlessly scales during massive traffic events.",
        category: "Next.js"
    },
    {
        question: "Can Next.js handle complex e-commerce?",
        answer: "Yes. It is the industry standard for modern e-commerce. You get instant page transitions and a checkout flow that never lags.",
        detailedAnswer: "Absolutely. Next.js is the gold standard for high-performance e-commerce (\"Composable Commerce\"). We build custom storefronts that connect to Shopify or any other backend. This gives you the inventory management of Shopify but with a frontend that is 10x faster and distinctively yours. No more generic themes.",
        category: "Next.js"
    },
    {
        question: "How do you price your projects?",
        answer: "We focus exclusively on ROI. Our solutions are engineered to pay for themselves through higher conversion rates, reduced manual labor, and increased sales velocity.",
        detailedAnswer: "We don't do cookie-cutter pricing because we engineer bespoke strategic assets. A high-converting marketing platform typically ranges from $10k - $25k. Complex corporate web applications, multi-tenant SaaS tools, or enterprise data migrations start at $30k. We provide fixed-price, outcome-based quotes so you know exactly what your business investment is upfront, without the risk of scope creep.",
        category: "General"
    }
];

export const HEADLESS_CMS_FAQS: FAQItem[] = [
    {
        question: "Does Sanity require technical skills for our marketing team?",
        answer: "Not at all. The Sanity Studio empowers marketing teams to ship campaigns instantly with a visual builder, completely eliminating the engineering bottleneck.",
        detailedAnswer: "We implement Sanity.io precisely because it accelerates your marketing velocity. For your marketing team, it provides an intuitive, real-time visual editing experience. They can drag-and-drop landing pages, run A/B tests, and update copy without ever filing an IT ticket. Meanwhile, under the hood, the content remains strictly structured, ensuring your brand stays perfectly consistent across all platforms.",
        category: "Headless CMS"
    },
    {
        question: "Can I migrate my existing blog posts?",
        answer: "Yes. We write custom migration scripts to move all your content from WordPress/Contentful/Drupal to Sanity with zero data loss.",
        detailedAnswer: "Yes. We specialize in data migration. We don't ask you to copy-paste manually. We write scripts to export all your existing posts, authors, categories, and images directly into Sanity. We map your old URLs to the new ones so you don't lose any SEO juice.",
        category: "Headless CMS"
    },
    {
        question: "Do I have to pay for Sanity?",
        answer: "Sanity has a generous free tier that covers most small-to-medium sites. Enterprise plans are available for high volume.",
        detailedAnswer: "Sanity has an incredibly generous free tier that includes 3 users and ample bandwidth, which is sufficient for most of our clients. If you need advanced role-based access control (SSO) or higher API limits, their Team plan is very competitively priced compared to Contentful or Storyblok.",
        category: "Headless CMS"
    }
];

export const HEADLESS_WORDPRESS_FAQS: FAQItem[] = [
    {
        question: "Do I lose my plugins?",
        answer: "You lose the frontend plugins (visual builders), but you keep backend plugins (Yoast, ACF). This is good—it makes your site faster.",
        detailedAnswer: "You will keep using backend plugins like ACF (Advanced Custom Fields) and Yoast SEO. However, visual builders like Elementor or Divi will be replaced by our custom-coded Next.js frontend. This is actually a huge benefit—it removes the 'bloat' that slows down your site while keeping the admin tools you rely on.",
        category: "Headless WordPress"
    },
    {
        question: "Is it harder to maintain?",
        answer: "It requires a developer for feature updates, but day-to-day content editing is exactly the same as standard WordPress.",
        detailedAnswer: "Day-to-day, it's identical. You log into /wp-admin and write posts. For technical maintenance, it's actually easier in some ways because the 'Head' (frontend) is separated from the 'Body' (WordPress). If WordPress updates break a plugin, your main site usually stays up. We provide maintenance packages to handle the technical side.",
        category: "Headless WordPress"
    }
];

export const MOBILE_APP_FAQS: FAQItem[] = [
    {
        question: "Do I need two separate teams for iOS and Android?",
        answer: "No. We use React Native to build both apps from a single codebase, saving you ~40% in development costs.",
        detailedAnswer: "Gone are the days of hiring a Swift developer and a Kotlin developer. We use React Native (the same tech used by Instagram and Uber) to build a single codebase that deploys to both the Apple App Store and Google Play Store. It looks, feels, and performs just like a native app.",
        category: "Mobile"
    },
    {
        question: "Can you access the camera and GPS?",
        answer: "Yes. React Native has full access to device hardware including Camera, Geolocation, Bluetooth, and Biometrics.",
        category: "Mobile"
    }
];

export const CUSTOM_SOFTWARE_FAQS: FAQItem[] = [
    {
        question: "Do I own the code?",
        answer: "100%. Upon final payment, the IP is yours. We don't hold your business hostage.",
        detailedAnswer: "Absolutely. We build 'Work for Hire'. Once the project is paid for, you own the GitHub repository and all the intellectual property. You are free to take the code to another agency or hire an in-house team to maintain it.",
        category: "Custom Software"
    },
    {
        question: "How do you handle security?",
        answer: "We use industry standards: Encryption at rest, HTTP-only cookies, automated backups, and penetration testing.",
        category: "Custom Software"
    }
];

export const AI_FAQS: FAQItem[] = [
    {
        question: "How does your AI-integrated workflow benefit my business?",
        answer: "Speed to Market. We utilize AI automation to slash development cycles by up to 30%, allowing you to launch revenue-generating features faster.",
        detailedAnswer: "We've re-engineered our agency around AI-orchestration for maximum commercial impact. By deploying specialized models to handle boilerplate code, test generation, and QA automation, our elite engineers are freed up to focus entirely on your core business logic and system architecture. This means faster time-to-market, zero technical debt, and optimized capital allocation.",
        category: "AI Efficiency"
    },
    {
        question: "Does using AI compromise the quality of the code?",
        answer: "No, it enhances it. AI allows us to run more comprehensive testing and automated bug-hunting than traditional agencies.",
        detailedAnswer: "Our AI-driven QA agents perform continuous penetration testing and edge-case simulations that are often skipped in manual workflows. Every line of code is still peer-reviewed by a senior developer, combining machine velocity with human-grade precision.",
        category: "AI Efficiency"
    },
    {
        question: "Is my project data and IP safe from being use to train public AI?",
        answer: "Absolutely. We use private, enterprise-grade environments that ensure your code and logic are never shared or leaked.",
        detailedAnswer: "Security is non-negotiable. We utilize private API endpoints and enterprise subscriptions that strictly forbid using customer data for training public models. Your proprietary code remains internal to your project, protected by industry-standard security protocols.",
        category: "AI Efficiency"
    }
];

export const ALL_FAQS = [
    ...AI_FAQS,
    ...NEXT_JS_FAQS,
    ...HEADLESS_CMS_FAQS,
    ...HEADLESS_WORDPRESS_FAQS,
    ...MOBILE_APP_FAQS,
    ...CUSTOM_SOFTWARE_FAQS
];
