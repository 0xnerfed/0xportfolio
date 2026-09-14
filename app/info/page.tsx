import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main
      id="main-content"
      className="
        w-full
        px-5
        pt-30
        pb-20
        max-md:px-4
        max-md:pt-24
        max-md:pb-16
      "
    >
      {/* Introduction */}
      <header>
        <h1
          className="
            max-w-[75%]
            text-[32px]
            leading-[120%]
            tracking-tight
            max-md:max-w-full
            max-md:text-[26px]
            max-md:leading-[125%]
          "
        >
          Jacques is a designer and developer based in Lagos, Nigeria. His
          work spans brand identity, user experience, web, and emerging
          interfaces—always with a focus on building coherent brand
          experiences.
        </h1>
      </header>

      {/* Track Record */}
      <section
        aria-labelledby="track-record-heading"
        className="
          relative
          mt-30
          flex
          w-full
          items-start
          justify-between
          gap-10
          max-md:mt-20
          max-md:flex-col
          max-md:gap-8
        "
      >
        <div
          className="
            min-w-0
            flex-1
            max-md:sticky
            max-md:top-20
            max-md:w-full
          "
        >
          <h2
            id="track-record-heading"
            className="text-xl font-medium tracking-tight"
          >
            Track record
          </h2>
        </div>

        <div className="min-w-0 flex-1 max-md:w-full">
          <p className="text-lg leading-[1.35] max-md:text-base">
            For the past decade, he has worked with companies such as Ehizua,
            Google, Apple, and Meta, as well as smaller but mighty startups
            like Physical Intelligence, Playground, and, most recently, Opal
            Camera, where he joined as Head of Design. There, he helped
            establish the brand’s credibility, launch a new consumer device
            to market, and incubate the future of their product lineup.
          </p>

          <p className="mt-6 text-lg leading-[1.35] max-md:text-base">
            Throughout his career, he has worked across nearly every niche—
            gaming, healthcare, entertainment, and finance—gaining a broad
            perspective on the principles, essentials, and pitfalls of
            interactive design.
          </p>

          <p className="mt-6 text-lg leading-[1.35] max-md:text-base">
            Beyond his professional work, he is known for his deep love for
            basketball, his leadership, and his contributions to the community
            through lectures and writing.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div
        className="my-30 line max-md:my-20"
        aria-hidden="true"
      />

      {/* Work Experience */}
      <section
        aria-labelledby="work-experience-heading"
        className="
          relative
          flex
          w-full
          items-start
          justify-between
          gap-10
          max-md:flex-col
          max-md:gap-8
        "
      >
        {/* Section title */}
        <div
          className="
            sticky
            top-20
            min-w-0
            flex-1
            self-start
            max-md:static
            max-md:w-full
          "
        >
          <h2
            id="work-experience-heading"
            className="text-xl font-medium tracking-tight"
          >
            Selected work
          </h2>
        </div>

        {/* Experience list */}
        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
            max-md:w-full
          "
        >
          {/* Magma */}
          <article
            aria-labelledby="magma-title"
            className="flex w-full flex-col gap-4"
          >
            <header>
              <Link
                href=""
                className="size-11"
                aria-hidden="true"
              >
                <Image
                  src="/assets/logo/Magma.svg"
                  width={44}
                  height={44}
                  alt=""
                />
              </Link>

              <div className="mt-2.5">
                <h3
                  id="magma-title"
                  className="text-sm font-medium"
                >
                  Magma Inc.
                </h3>

                <p className="text-[12px] leading-4 text-black-300">
                  Interface Designer, 2025 — Present
                </p>
              </div>
            </header>

            <p className="text-xs leading-[1.4] text-black-300">
              Magma Inc. is a startup in San Francisco working on cameras
              that make it easy to look and sound professional on video
              calls. Magma is focused on building the best cameras on the
              market today.
            </p>

            <p className="text-xs leading-[1.4] text-black-300">
              At Magma Inc. I led brand, digital product, and marketing
              design efforts across the board, working with internal and
              external teams. I built the companion app for macOS,
              released a new device — the Opal Tadpole — and started
              incubating new devices with the help of a new funding round
              led by OpenAI.
            </p>

            <Link
              href="/works/magma"
              aria-label="View the Magma Inc. case study"
              title="View the Magma Inc. case study"
              className="
                group
                flex
                h-80
                w-full
                items-end
                justify-end
                overflow-hidden
                rounded-xl
                bg-[#E7E7E7]
                outline-none
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-black
                max-md:h-64
                max-sm:h-56
              "
            >
              <Image
                src="/assets/preview/Magma-preview.png"
                width={449.5}
                height={337.13}
                alt="Preview of the Magma Inc. brand and product design case study"
                className="
                  h-auto
                  max-h-full
                  w-auto
                  max-w-full
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-[1.02]
                  group-focus-visible:scale-[1.02]
                "
                priority
              />
            </Link>

            <footer className="text-[12px] leading-[1.1]">
              <p className="font-medium">
                Magma Inc.
              </p>

              <p className="mt-1 text-black-300">
                UI Design
              </p>
            </footer>
          </article>

          {/* Divider */}
          <div
            className="line my-20 h-px w-full max-md:my-16"
            aria-hidden="true"
          />

          {/* Astrix */}
          <article
            aria-labelledby="astrix-title"
            className="flex w-full flex-col gap-4"
          >
            <header>
              <Link
                href=""
                className="size-11"
                aria-hidden="true"
              >
                <Image
                  src="/assets/logo/Astrix.svg"
                  width={44}
                  height={44}
                  alt=""
                />
              </Link>

              <div className="mt-2.5">
                <h3
                  id="astrix-title"
                  className="text-sm font-medium"
                >
                  Astrix
                </h3>

                <p className="text-[12px] leading-4 text-black-300">
                  Product Designer, 2022 — 2025
                </p>
              </div>
            </header>

            <p className="text-xs leading-[1.4] text-black-300">
              Astrix is a company focused on building thoughtful digital
              products and experiences for modern teams.
            </p>

            <p className="text-xs leading-[1.4] text-black-300">
              At Astrix, I contributed to product, brand, and marketing
              design, collaborating with internal and external teams to
              create clear, cohesive experiences.
            </p>

            <Link
              href="/works/astrix"
              aria-label="View the Astrix case study"
              title="View the Astrix case study"
              className="
                group
                flex
                h-80
                w-full
                items-end
                justify-center
                overflow-hidden
                rounded-xl
                bg-[#F0F0F0]
                max-md:h-64
                max-sm:h-56
              "
            >
              <Image
                src="/assets/preview/Astrix-preview.png"
                width={285}
                height={263}
                alt="Preview of the Astrix brand and product design case study"
                className="
                  h-auto
                  max-h-full
                  w-auto
                  max-w-full
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-[1.02]
                  group-focus-visible:scale-[1.02]
                "
                priority
              />
            </Link>

            <footer className="text-[12px] leading-[1.1]">
              <p className="font-medium">
                Astrix
              </p>

              <p className="mt-1 text-black-300">
                Brand, Product Design, Website
              </p>
            </footer>
          </article>

          {/* Divider */}
          <div
            className="line my-20 h-px w-full max-md:my-16"
            aria-hidden="true"
          />

          {/* Notion */}
          <article
            aria-labelledby="notion-title"
            className="flex w-full flex-col gap-4"
          >
            <header>
              <Link
                href=""
                className="size-11"
                aria-hidden="true"
              >
                <Image
                  src="/assets/logo/Notion.svg"
                  width={44}
                  height={44}
                  alt=""
                />
              </Link>

              <div className="mt-2.5">
                <h3
                  id="notion-title"
                  className="text-sm font-medium"
                >
                  Notion Inc.
                </h3>

                <p className="text-[12px] leading-4 text-black-300">
                  Brand Designer, 2020 — 2022
                </p>
              </div>
            </header>

            <p className="text-xs leading-[1.4] text-black-300">
              Notion is a connected workspace that brings notes, documents,
              projects, and knowledge together in one place.
            </p>

            <p className="text-xs leading-[1.4] text-black-300">
              At Notion, I contributed to product and brand design,
              collaborating across teams to make complex tools feel clear,
              flexible, and approachable.
            </p>

            <Link
              href="/works/notion"
              aria-label="View the Notion case study"
              title="View the Notion case study"
              className="
                group
                flex
                h-80
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                bg-[#F0F0F0]
                outline-none
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-black
                max-md:h-64
                max-sm:h-56
              "
            >
              <Image
                src="/assets/preview/Notion-preview.png"
                width={669}
                height={355}
                alt="Preview of the Notion brand identity and product design case study"
                className="
                  h-auto
                  max-h-full
                  w-auto
                  max-w-full
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-[1.02]
                  group-focus-visible:scale-[1.02]
                "
                priority
              />
            </Link>

            <footer className="text-[12px] leading-[1.1]">
              <p className="font-medium">
                Notion Inc.
              </p>

              <p className="mt-1 text-black-300">
                Brand Identity
              </p>
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
}

