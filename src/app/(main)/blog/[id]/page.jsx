import Image from "next/image";
import ServicesLayout from "../../services/_components/ServicesLayout";
import BlogHero from "../_components/BlogHero";
import { marked } from "marked";
import { ArrowBigLeft, MessageSquare } from "lucide-react";
import Link from "next/link";

// Blog posts data
const posts = [
  {
    id: 1,
    title: "Why Your Business Needs a Modern Website in 2025",
    summary:
      "A professional website increases trust, visibility, and customer engagement.",
    image:
      "https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg",
    slug: "why-your-business-needs-a-modern-website",
    category: "Web Development",
    date: "2025-01-05",
    content: `
In today’s fast-paced digital economy, your website is the heart of your business identity. Customers expect seamless experiences, instant access to information, and visually appealing designs that communicate professionalism. Whether you are a startup or a well-established company, having a modern website is no longer optional; it is essential for building credibility and attracting clients. At TinaSoft Nexus, we create websites that are not only visually stunning but strategically designed to drive growth and engagement.

First impressions matter. The moment a visitor lands on your website, they form an opinion about your brand. A sleek, responsive, and user-friendly website immediately conveys trust, authority, and reliability. Outdated designs, slow-loading pages, and poor navigation, on the other hand, can turn potential clients away before they even explore your services. In 2025, a website serves as the digital front door to your business, and it must impress from the very first click.

With over 80% of internet traffic coming from mobile devices, having a mobile-optimized website is critical. A modern site provides seamless experiences across devices, fast-loading pages, and intuitive navigation that keeps visitors engaged. This not only improves user satisfaction but also boosts your search engine rankings, as Google favors mobile-friendly websites in its algorithm.

Beyond aesthetics and usability, a well-designed website drives measurable business results. From generating leads and capturing inquiries to showcasing products and facilitating online sales, your website acts as a 24/7 marketing and sales tool. By integrating modern design principles with strategic content, TinaSoft Nexus ensures your website converts visitors into loyal customers.

Finally, a modern website helps you stay ahead of your competition. In a digital landscape where every business is vying for attention, having a website that reflects professionalism and reliability is a competitive advantage. It enhances brand authority, increases visibility, and positions your company as a trusted leader in your industry.

At TinaSoft Nexus, we specialize in building responsive, fast, secure, and highly converting websites. Your customers are online — your business should be too.
    `,
  },

  {
    id: 2,
    title: "Choosing Between Custom Software vs Off-the-Shelf",
    summary: "Understand which software option is best for your business.",
    image: "/blog.jpg",
    slug: "custom-vs-off-the-shelf-software",
    category: "Software Development",
    date: "2024-12-22",
    content: `
Selecting the right software is a critical decision that can impact your business efficiency, scalability, and growth. In today’s technology-driven world, businesses must decide between custom software development or adopting off-the-shelf solutions. Each approach has its benefits and limitations, and understanding them is essential to make an informed decision.

Off-the-shelf software refers to pre-built applications designed for general use. Popular examples include QuickBooks for accounting, Shopify for e-commerce, or Trello for project management. These solutions are typically quick to deploy, cost-effective upfront, and include regular updates and support. They are suitable for businesses with standard processes and limited customization needs. However, they often require businesses to adapt their workflow to the software, can accumulate subscription costs, and may face challenges integrating with other systems.

Custom software, on the other hand, is tailored specifically to meet your unique business needs. At TinaSoft Nexus, we develop solutions such as ERP systems, HR and payroll management platforms, booking platforms, inventory management tools, and workflow automation applications. Custom software provides scalability, efficiency, and full control over features and security. While it requires a higher initial investment and dedicated development time, the long-term benefits include improved productivity, streamlined operations, and a system built to grow with your business.

Deciding between off-the-shelf and custom solutions depends on your business requirements. Off-the-shelf software works well for small businesses with standard operations needing quick deployment. Custom software is ideal for businesses with unique processes, growth ambitions, and the need for automation and integration.

Ultimately, custom software is an investment that pays off by delivering efficiency, ownership, and long-term value. At TinaSoft Nexus, we create scalable, secure, and modern solutions tailored to your specific workflows, ensuring your technology works as hard as your business does.
    `,
  },

  {
    id: 3,
    title: "How SEO Can Transform Your Business Visibility",
    summary: "Learn how search engine optimization boosts traffic and sales.",
    image: "https://algorizon.com/wp-content/uploads/2024/09/seo.jpg",
    slug: "how-seo-transforms-business",
    category: "SEO & Marketing",
    date: "2024-11-10",
    content: `
In an increasingly digital world, being visible online is critical to business success. Search Engine Optimization (SEO) is a powerful tool that helps your website rank higher on search engines, driving organic traffic and attracting potential customers. Effective SEO strategies ensure that your business is found by the right audience at the right time, turning visitors into paying clients.

SEO improves discoverability by optimizing your website’s content, structure, and performance. It allows your business to appear prominently when users search for relevant products or services, increasing the likelihood of engagement. Unlike paid advertisements, SEO provides long-term results, delivering sustainable traffic and lead generation over time.

Beyond traffic, SEO builds credibility and brand authority. Websites that consistently rank on the first page of search results are perceived as trusted and professional. This visibility reinforces your reputation, positioning your company as a leader in your industry. Additionally, a well-optimized site improves user experience, with faster loading speeds, mobile responsiveness, secure connections, and clear navigation, all of which encourage visitors to stay and convert.

Investing in SEO also directly impacts revenue. By targeting users actively searching for your products or services, SEO attracts high-intent traffic, leading to higher conversion rates and sales. For example, appearing in searches for “software development company near me” or “best ERP system for SMEs” brings ready-to-buy customers to your business.

At TinaSoft Nexus, we design SEO strategies that go beyond rankings. We focus on increasing organic traffic, strengthening brand authority, and driving measurable business growth. In a world where online visibility can make or break a business, SEO is not just an option—it is a necessity. Let us help your business get noticed, trusted, and chosen by your customers.
    `,
  },
];

// Server Component
export default function BlogDetails({ params }) {
  const { id } = params;

  // Convert id from string to number
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="p-10 text-center text-red-600">
        <h1>Post not found.</h1>
      </div>
    );
  }

  return (
    <ServicesLayout>
      <BlogHero
        image={post.image}
        desc={post.title}
        directory={post.category}
      />
      <div className="max-w-4xl mx-auto p-6">
        <Image
          src={post.image}
          width={900}
          height={500}
          alt={post.title}
          className="rounded-lg mb-6 w-full object-cover"
        />

        <h1 className="text-4xl font-bold text-blue-950 mb-4">{post.title}</h1>

        <p className="text-gray-600 text-sm mb-6">
          {post.category} • {post.date}
        </p>

        <article
          className="prose prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}
        />
      </div>
      <div className="w-full flex flex-row items-center justify-between md:py-6">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-blue-950 hover:text-blue-600 max-w-4xl mx-auto p-6"
        >
          <ArrowBigLeft /> Back to Blog
        </Link>{" "}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 text-blue-950 hover:text-blue-600 max-w-4xl mx-auto p-6"
        >
          <MessageSquare /> Speak to Sales
        </Link>{" "}
      </div>
    </ServicesLayout>
  );
}
