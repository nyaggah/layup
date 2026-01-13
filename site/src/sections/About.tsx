import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Package,
  Phone,
} from "lucide-react";
import { Paragraph, Section, SectionTitle } from "../components/Section";

const base = import.meta.env.BASE_URL;

const projects = [
  {
    name: "specialize.studio",
    url: "https://specialize.studio",
    description:
      "One-man agency partnering with early-stage startups to build B2B, B2C & AI SaaS products. Modern Serverless (Next.js + Vercel + Supabase) and Modern Monolith (Rails 8 + Inertia.js + Vite/React/TS).",
    image: `${base}specialize-studio.avif`,
    featured: true,
  },
  {
    name: "picchat.ai",
    url: "https://picchat.ai",
    description:
      "Cross-platform desktop app for AI image generation, editing and curation. Mac App Store.",
    image: `${base}picchat.ai.avif`,
  },
  {
    name: "Bedframe.dev",
    url: "https://bedframe.dev",
    description:
      "Open source framework for shipping cross-browser extensions with Vite + React.",
    image: `${base}bedframe.avif`,
  },
  {
    name: "GabKit.com",
    url: "https://gabkit.com",
    description: "Creator platform starter kit built with Ruby on Rails.",
    image: `${base}gabkit.avif`,
  },
];

const contact = {
  email: "joe@nyaggah.com",
  phone: "(714) 931-0402",
  location: "Orange County, CA",
  links: [
    { label: "nyaggah.com", url: "https://nyaggah.com", icon: Globe },
    {
      label: "specialize.studio",
      url: "https://specialize.studio",
      icon: Globe,
    },
    {
      label: "github.com/nyaggah",
      url: "https://github.com/nyaggah",
      icon: Github,
    },
    {
      label: "github.com/joeydoey",
      url: "https://github.com/joeydoey",
      icon: Github,
    },
    {
      label: "npmjs.com/~nyaggah",
      url: "https://npmjs.com/~nyaggah",
      icon: Package,
    },
    {
      label: "linkedin.com/in/joenyaggah",
      url: "https://linkedin.com/in/joenyaggah",
      icon: Linkedin,
    },
  ],
};

export function About() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section id="about">
      <div className="space-y-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <img
            src={`${base}hello-is-this-thing-on.jpg`}
            alt="Joe Nyaggah"
            className="h-32 w-32 rounded-full object-cover ring-4 ring-primary/20"
          />
          <div className="text-center sm:text-left">
            <SectionTitle>Is this thing on?</SectionTitle>
            <Paragraph>
              Hey, I'm Joe. I've been a co-founder, designer, software engineer,
              and general "figure it out" person across startups, agencies, and
              enterprise. I build things that work for real people in real
              contexts.
            </Paragraph>
            <Paragraph>
              Current obsession: simple solutions, simple architectures, the
              modern monolith. Cross-platform apps that respect users and
              developers alike.
            </Paragraph>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-medium">What I've Been Building</h3>

          {featured && (
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-6 block overflow-hidden rounded-lg transition-all hover:shadow-lg"
            >
              <div className="aspect-[21/9] overflow-hidden bg-secondary">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
                />
              </div>
              <div className="py-4">
                <div className="mb-2 text-lg font-medium text-foreground group-hover:text-primary">
                  {featured.name}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {featured.description}
                </p>
              </div>
            </a>
          )}

          <div className="grid gap-4 sm:grid-cols-3">
            {others.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-lg transition-all hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden bg-secondary">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="py-3">
                  <div className="mb-1 font-medium text-foreground group-hover:text-primary">
                    {project.name}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium">Let's Talk</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-sm transition-colors hover:bg-secondary"
            >
              <Mail size={16} className="text-primary" />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/[^\d]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-sm transition-colors hover:bg-secondary"
            >
              <Phone size={16} className="text-primary" />
              {contact.phone}
            </a>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2 text-sm">
              <MapPin size={16} className="text-primary" />
              {contact.location}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {contact.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <link.icon size={14} />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-primary/10 p-6 text-center">
          <p className="mb-2 text-lg font-medium text-foreground">
            Seriously though, is this thing on?
          </p>
          <p className="text-sm text-muted-foreground">
            If you've read this far, we should probably talk. I promise I'm
            better in person than I am in carefully crafted proposals.
          </p>
          <a
            href={`mailto:${contact.email}?subject=Yes, this thing is on`}
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-4 items-center gap-2 rounded-full"
            )}
            // className="mt-4 inline-block rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Prove it's on
          </a>
        </div>
      </div>
    </Section>
  );
}
