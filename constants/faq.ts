export interface FAQItem {
    question: string;
    answer: string;        // Concise version for Service Pages
    detailedAnswer?: string; // Extended version for Main FAQ Page
    category: string;
}

export const NEXT_JS_FAQS: FAQItem[] = [
    {
        question: "Will switching to Next.js negatively impact my SEO?",
        answer: "No, quite the opposite. Next.js is designed for performance and SEO dominance. SSR ensures search engines crawl your full content immediately.",
        detailedAnswer: "No. In fact, moving to Next.js is one of the best things you can do for SEO. Unlike standard React apps (SPAs) that search engines struggle to read, Next.js uses Server-Side Rendering (SSR). This means we send a fully formed HTML page to Googlebot effectively instantly. Combined with Vercel's global CDN and automatic image optimization, your Core Web Vitals (speed metrics) will likely turn green, directly boosting your ranking.",
        category: "Next.js"
    },
    {
        question: "Why choose Next.js over WordPress?",
        answer: "Speed, Security, and Scalability. WordPress relies on heavy plugins. Next.js sends pre-built, optimized pages instantly.",
        detailedAnswer: "It comes down to Speed, Security, and Scalability. WordPress was built for blogging in 2003. It relies on a stack of heavy plugins that slow down your site and open up security holes. Next.js is a modern framework used by Netflix, TikTok, and Nike. It separates your content (Sanity CMS) from your code, meaning your site loads instantly, can't be hacked via plugins, and can scale to millions of users without crashing.",
        category: "Next.js"
    },
    {
        question: "Can Next.js handle complex e-commerce?",
        answer: "Yes. It is the industry standard for modern e-commerce. You get instant page transitions and a checkout flow that never lags.",
        detailedAnswer: "Absolutely. Next.js is the gold standard for high-performance e-commerce (\"Composable Commerce\"). We build custom storefronts that connect to Shopify or any other backend. This gives you the inventory management of Shopify but with a frontend that is 10x faster and distinctively yours. No more generic themes.",
        category: "Next.js"
    },
    {
        question: "How much does a project cost?",
        answer: "Projects typically range from $5k to $50k+. We focus on ROI—building a tool that pays for itself through higher conversions.",
        detailedAnswer: "We don't do cookie-cutter pricing because we don't do cookie-cutter work. A high-end marketing site normally lands between $5k - $15k. Complex web applications or large-scale e-commerce migrations start at $20k and can go up to $50k+. We provide fixed-price quotes so you know exactly what the investment is upfront. We focus on ROI—building a tool that pays for itself through higher conversions.",
        category: "General"
    }
];

export const HEADLESS_CMS_FAQS: FAQItem[] = [
    {
        question: "Is Sanity hard for non-technical users?",
        answer: "Not at all. The Sanity Studio is a real-time, visual editor. It feels like Squarespace but outputs clean data.",
        detailedAnswer: "We use Sanity.io because it offers the best editor experience on the market. For your marketing team, it looks just like a modern website builder. You get a real-time preview of your changes, drag-and-drop page building, and image cropping. But under the hood, it stores your content as pure data, which allows us to feed it into your website, mobile app, or any other platform instantly.",
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

export const ALL_FAQS = [
    ...NEXT_JS_FAQS,
    ...HEADLESS_CMS_FAQS,
    ...HEADLESS_WORDPRESS_FAQS,
    ...MOBILE_APP_FAQS,
    ...CUSTOM_SOFTWARE_FAQS
];
