import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, GraduationCap, Users, BookOpen } from "lucide-react";

export const metadata = {
  title: "PDP on Becoming an Inspiring Teacher | IQAC | VMLS",
  description: "Detailed report on the Professional Development Program conducted at VMLS on September 15, 2023.",
};

export default function PDPPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/iqac" className="text-gray-500 hover:text-[#a31f34] transition-colors">IQAC</Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/iqac/workshops" className="text-gray-500 hover:text-[#a31f34] transition-colors">Workshops</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">PDP Report</span>
        </div>
      </nav>

      {/* Hero Section (Collaboration Style) */}
      <section className="relative px-[5%] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/iqac/iqac-1.webp"
            alt="Professional Development Program"
            fill
            sizes="100vw"
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#fbb03b]"></div>
            <div className="pl-6 md:pl-10">
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight font-bold">
                Professional <br />
                <span className="text-[#fbb03b]">Development Program</span>
              </h1>
              <p className="font-inter text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed font-medium">
                Becoming an Inspiring Teacher: A Faculty Empowerment Initiative held on 15th September 2023.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section (Split Layout) */}
      <section className="pt-20 pb-6 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-8">
              Resounding Success at VMLS
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-inter text-justify mb-8">
              We&apos;re thrilled to share the resounding success of our recent Professional Development Programme conducted at the Vinayaka Mission&apos;s Law School. This initiative brought together distinguished legal minds and educators to explore the future of legal pedagogy.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Date", value: "15/09/2023" },
                { label: "Venue", value: "VMLS Campus" }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-xl border-l-4 border-[#fbb03b]">
                  <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">{item.label}</div>
                  <div className="text-lg font-bold text-[#800000]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/iqac/iqac-1.webp"
                alt="Event Session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pedagogy Session (New Content) */}
      <section className="py-8 px-[5%] bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-8">
              Craft of Pedagogy
            </h2>
            <p className="text-sm text-[#a31f34] font-bold uppercase tracking-[0.2em] mb-4">Led by Prof. Dr. Tanushree Sharma</p>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify font-inter">
              <p>
                During the session on the Craft of Pedagogy led by Prof. Dr. Tanushree Sharma, participants delved deeper into innovative teaching techniques. The concept of flipped classrooms, for instance, was explored in detail, highlighting how it empowers students to take ownership of their learning by engaging with course materials before class.
              </p>
              <p>
                Case study methods were discussed as a powerful tool for contextual learning, allowing students to apply theoretical knowledge to real-world scenarios. Activity-based learning, an interactive approach that encourages hands-on experiences, was demonstrated, illustrating its effectiveness in promoting critical thinking and problem-solving skills.
              </p>
              <p>
                Scaffolding, a strategy for breaking down complex topics into manageable chunks, was introduced as a means to support students&apos; gradual skill development. The jigsaw method, a cooperative learning technique, was also explained, showing how it promotes collaboration and shared expertise. Furthermore, the session provided a comprehensive breakdown of Bloom&apos;s Taxonomy, helping educators align their teaching objectives with the cognitive skills they aim to develop.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/iqac/iqac-2.webp"
                alt="Pedagogy Session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Art of Writing Session (New Content) */}
      <section className="py-6 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-8">
              The Art of Writing
            </h2>
            <p className="text-sm text-[#a31f34] font-bold uppercase tracking-[0.2em] mb-4">Led by Prof. Deepika Jain</p>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify font-inter">
              <p>
                Prof. Deepika Jain&apos;s session on The Art of Writing offered participants a holistic approach to academic writing. Beyond discussing the mechanics of thesis formulation and the critical evaluation of existing academic discourse, the session underscored the importance of maintaining a consistent writing practice throughout the year.
              </p>
              <p>
                Attendees gained insights into effective time management and goal setting to ensure continuous progress. The discussion on citation management expanded to include guidance on proper citation styles and the importance of avoiding plagiarism. 
              </p>
              <p>
                Prof. Jain also encouraged participants to infuse their writing with a personal touch, emphasizing that maintaining the soul of their work can make their contributions to the academic community more compelling and memorable.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/iqac/iqac-3.webp"
                alt="Art of Writing Session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Ethics of Teaching Session (New Content) */}
      <section className="py-8 px-[5%] bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-8">
              The Ethics of Teaching
            </h2>
            <p className="text-sm text-[#a31f34] font-bold uppercase tracking-[0.2em] mb-4">Led by Prof. Dr. Mousumi Mukherjee</p>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify font-inter">
              <p>
                The session on The Ethics of Teaching, led by Prof. Dr. Mousumi Mukherjee, delved into the emotional dimension of teaching. Prof. Mukherjee stressed that effective teaching goes beyond the dissemination of knowledge; it requires building an emotional connection with students.
              </p>
              <p>
                Educators were guided on how to achieve this connection by being empathetic, approachable, and compassionate. Vulnerability was highlighted as a strength, allowing teachers to relate to their students on a human level and create an atmosphere of trust and authenticity.
              </p>
              <p>
                Intellectual competence and curiosity were presented as vital qualities, enabling teachers to instill a passion for learning in their students. This session served as a reminder that the ethical foundation of teaching lies in fostering an environment where students feel valued, respected, and inspired to excel.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/iqac/iqac-4.webp"
                alt="Ethics of Teaching Session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Publishing Session (New Content) */}
      <section className="py-8 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-8">
              Publishing in High-Impact Journals
            </h2>
            <p className="text-sm text-[#a31f34] font-bold uppercase tracking-[0.2em] mb-4">Led by Prof. Arjya Majumdar</p>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify font-inter">
              <p>
                In the session on Publishing in High-Impact Journals, Prof. Arjya Majumdar went beyond the basics of selecting journals based on citation scores. Participants gained a deeper understanding of the publication process, from crafting compelling abstracts and selecting appropriate journals to managing the flow of their research papers effectively.
              </p>
              <p>
                Prof. Majumdar also shared valuable insights on suggesting suitable reviewers for their submissions and navigating the peer-review process. The session explored the challenges posed by cloned and predatory journals, emphasizing the need for rigorous scrutiny. 
              </p>
              <p>
                Prof. Majumdar also addressed the prevailing &quot;publish or perish&quot; culture in academia and encouraged participants to strike a balance between crafting high-quality content and ensuring its marketability to reach a broader audience.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/iqac/iqac-5.webp"
                alt="Publishing Session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Team-Building Session (Final Content - No Photo) */}
      <section className="py-12 px-[5%] bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-8">
            Team-Building Session
          </h2>
          <p className="text-sm text-[#a31f34] font-bold uppercase tracking-[0.2em] mb-6">Led by Prof. Tanushree Sharma</p>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-inter">
            <p>
              The Team-Building Session, led by Prof. Tanushree Sharma, provided participants with a practical experience of team dynamics and cooperation. Activities such as Charades (Dumb Charades) and verbal football not only promoted teamwork but also demonstrated how such engaging exercises can be utilized in a classroom setting to enhance collaboration among students.
            </p>
            <p>
              The icebreaker sessions served as effective tools for building camaraderie among participants, showcasing the power of interactive and enjoyable activities in fostering a positive learning environment. 
            </p>
            <p className="font-bold text-[#800000] italic">
              Overall, this session not only delivered key insights into team building but also left participants with memorable ideas for promoting collaboration in their own classrooms.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
