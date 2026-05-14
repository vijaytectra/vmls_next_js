import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface FacultyData {
  name: string;
  role: string;
  qualifications?: string;
  image: string;
  slug: string;
  email?: string;
  bio: string[];
}

const facultyData: FacultyData[] = [
  {
    name: "Ms. Chesha P. Chellappan",
    role: "Assistant Dean - Ranking and Accreditation, Chief Superintendent - Exam Cell.",
    qualifications: "LL. M IPR & Public Law, Kerala University",
    image: "/images/faculty/02.webp",
    slug: "chesha-p-chellappan",
    email: "chesha@vmls.edu.in",
    bio: [
      "Chesha P. Chellappan is a legal professional with a robust educational and experiential background. She earned her B.A LL. B from His Highness the Maharaja's Govt. Law College, Ernakulam affiliated with Mahatma Gandhi University and later pursued LL. M in Public Law & IPR from the Department of Law, Kerala University. She has cleared the UGC – NET Examination. Before delving into LL.M she gained practical experience as an Advocate.",
      "Chesha’s journey in academia led her to become an Assistant Professor at Mount Zion Law College, affiliated with Mahatma Gandhi University, Kerala. She is currently pursuing her PhD from Pondicherry University. Her commitment to legal education shines through her engagement in various national and international seminars, workshops, round table conferences, and Faculty Development Programme.",
      "Her intellectual curiosity and interdisciplinary approach are evident from her participation as a valuator for the Young Innovators Programme, a unique initiative by the Kerala Development & Innovation Strategic Council (K-DISC). This role demonstrates her passion for fostering innovation within legal and educational spheres. She received an A+ grade in the Promotion of Excellence Among Gifted Students Programme from the General Education Department, Kerala, underscoring her outstanding academic achievements.",
      "Furthermore, Chesha’s contributions to projects under the aegis of the Kerala State Council for Science, Technology, and Education exemplify her dedication to collaborative efforts that bridge law with other domains, showcasing her versatility and ability to think beyond traditional boundaries.",
      "Chesha’s area of interest lies in Intellectual Property Rights, Family Law, Artificial Intelligence, and Social Issues."
    ]
  },
  {
    name: "Mr. Edhaya Chandran",
    role: "Assistant Dean - Outreach & Communications",
    qualifications: "M.A. Political Science (Political Science)",
    image: "/images/faculty/09.webp",
    slug: "edhaya-chandran",
    email: "edhayachandran@vmls.edu.in",
    bio: [
      "Edhaya Chandran is an academician with a keen interest in studying the development of subaltern politics in India. He completed his Masters degree in the stream of Political Science from Madras Christian College and cleared his NET in the year 2019. He specializes in western philosophy and his research thesis focuses on viewing democracy through the lens of continental philosophers. He co-founded an educational trust-Neelathazhal-to help underprivileged kids access education. He writes extensively on Subaltern Political Movements, Ethics, Gaming, pop culture, and philosophy."
    ]
  },
  {
    name: "Dr. Gnana Sanga Mithra. S",
    role: "Associate Dean - Research (Interdisciplinary)",
    qualifications: "M.A - Loyola College, Ph.D - VIT, Chennai",
    image: "/images/faculty/05.webp",
    slug: "gnana-sanga-mithra",
    email: "sangamithra@vmls.edu.in",
    bio: [
      "Dr. Gnana Sanga Mithra S. is an accomplished scholar in the field of Sociology, particularly specializing in Transgender Studies and Gender Studies. With a Bachelor's, Master's, and doctoral degree in Sociology, her academic journey reflects a deep commitment to understanding and advocating for marginalized communities. Throughout her career, Dr. Sanga Mithra has made significant contributions to research, with numerous papers published in prestigious Scopus Indexed journals. Her active participation in national and international conferences demonstrates her dedication to sharing knowledge and advancing the field.",
      "Dr. Sanga Mithra has held various leadership positions, including roles in student unions and anti-harassment cells. Her exceptional contributions to her institutions have been recognized with awards, including the Star Performer Award from Loyola College and the Best Researcher Award from University Putra Malaysia. Her accolades further underscore her research prowess, including receiving the Raman Research Cash Award from VIT and being recognized as a Situational Leader in the educational sector by Ooruni Foundation, Chennai. Additionally, she has received the Best Presenter Award at an international conference organized by Curtin University, Dubai, highlighting her ability to effectively communicate her research findings.",
      "Her expertise has been sought after by organizations such as the TN Forest Department, where she acted as a project consultant for a scheme funded by the Japan International Cooperation Agency. Furthermore, Dr. Sanga Mithra's research projects have been supported by seed grants from VMRF, demonstrating her capability to secure funding and carry out impactful research. She has an editorial role in the International Journal of Law and Society and is a reviewer for Frontiers and Taylor & Francis journals. Dr. Sanga Mithra's impact extends beyond academia, as she is actively involved as an external resource person for colleges and NGOs."
    ]
  },
  {
    name: "Dr. Krishna Kishore Padala",
    role: "Head - Exam Cell, VMLS, Co-ordinator - Legal Aid Clinic, VMLS.",
    qualifications: "LL.M & Ph.D (Labour, Capital and Industrial Laws) - Andhra University",
    image: "/images/faculty/03.webp",
    slug: "krishna-kishore-padala",
    email: "krishnakishore@vmls.edu.in",
    bio: [
      "Krishna Kishore holds a bachelor's degree from Acharya Nagarjuna University and an LL.M in Labour Capital and Law from Andhra University. He has successfully completed his Doctorate (Ph.D.) in Labour, Capital and Industrial Laws from Andhra University. He has cleared APSET and UGC - NET. Additionally, Krishna Kishore has an MBA (HR), M.Com, M.A. (Political Science), and an MSW from the Centre for Distance Education, Acharya Nagarjuna University.",
      "Before starting his career in academics, he worked as a Project Coordinator with the Tribal Education and Rural Education Society, focused on tribal issues from a socio-legal context. Subsequently, he was an Assistant Professor at the Vikas Group of Institutions, and taught law subjects within the MBA programme. He has also attended various national and international conferences and has several publications in peer-reviewed journals such as the International Education and Research Journal, Indian Journal of Law and Legal Journal, International Journal of Legal Science and Innovation, and Black White Legal. His areas of focus include child labour, comparative social security laws between countries, effectiveness in implementation of ESI Act, effective redressal of industrial disputes, prostitution, slavery and human trafficking."
    ]
  },
  {
    name: "Ms. Sinjini Sen",
    role: "Assistant Professor",
    qualifications: "LL.M (Intellectual property rights and Business law) National Law Institute University, Bhopal.",
    image: "/images/faculty/12.webp",
    slug: "sinjini-sen",
    email: "sinjinisen@vmls.edu.in",
    bio: [
      "Sinjini Sen is a legal professional with a rich and varied background in the legal industry. Currently, Sinjini is pursuing a PhD from Rajiv Gandhi School of Intellectual Property Law, IIT Kharagpur, where her research focuses on the dynamic intersection of Intellectual Property Law and Health Regulation. Her keen interest in these fields stems from a profound belief in the importance of legal frameworks that shape innovation, safeguard public health. Holding BA LL.B (Hons) from University of Calcutta and LL.M from NLIU Bhopal, she has established herself in academia and beyond as an Intellectual Property Lawyer.",
      "Prior to her foray into academia, Sinjini garnered extensive industry experience through her associations with prestigious law firms such as Daswani and Daswani, D.P Ahuja and Krishnamurthy. Beyond her legal acumen, Sinjini holds a unique passion for classical dance and music, a facet that beautifully complements her intellectual pursuits."
    ]
  },
  {
    name: "Ms. Nabeela Siddiqui",
    role: "Assistant Professor",
    qualifications: "M.L. / LL.M (Constitutional Law and Public Order), University of Madras",
    image: "/images/faculty/14.webp",
    slug: "nabeela-siddiqui",
    email: "nabeela@vmls.edu.in",
    bio: [
      "Ms. Nabeela Siddiqui is an accomplished academician with a strong focus on contemporary issues such as climate change, international water disputes, and cooperation. Throughout her impressive career, she has held esteemed positions at renowned institutions, including CHRIST (Deemed to be University), Dharamshastra National Law University (DNLU), and the National Green Tribunal, Principal Bench, New Delhi.",
      "Ms. Siddiqui's dedication and commitment to her field have been recognized with prestigious honors, such as the President of India, Dr. Shankar Dayal Sharma Gold Medal, The Innes Prize, The Carmicheal Prize, and The V. Suresham Memorial Award, all of which she earned during her master's program at the esteemed University of Madras, Chennai.",
      "As an avid researcher, Ms. Siddiqui has authored and co-authored numerous book chapters and articles, many of which are indexed in Scopus and listed in UGC CARE. Her expertise in legal matters and her insights into current affairs have garnered widespread recognition and she is a regular contributor to leading national newspapers and forums, including The Deccan Herald, The Hindu, Economic Political Weekly, Financial Express, among others."
    ]
  },
  {
    name: "Dr. Shenbagavalli",
    role: "Associate Dean, Student Affairs",
    qualifications: "MBM - Alagappa University / Ph.D - SRM University Chennai",
    image: "/images/faculty/38.jpeg",
    slug: "shenbagavalli",
    email: "shenbagavalli@vmls.edu.in",
    bio: [
      "Dr. Shenbagavalli is a high-energy professional and an excellent communicator with exceptional interpersonal and problem-solving skills and a history of excelling across academic and corporate sectors; poised for challenging assignments in Research, Training & Development, and Teaching with an organization of high repute. A perfect blend of academics, research, and industry experience. The rich experience acquired over the 26 years made her an enthusiastic individual possessing zeal for learning with excellent communication. She is keen, conscientious, with a friendly disposition; and has been placed in positions of trust with a great deal of responsibility. She is an efficient and reliable individual who can work alone or as part of a team, work well under extreme pressure, and remain calm with the ability to prioritize. Her proven ability to organize, prioritize, and work in a team and by herself has always made her a stand-out member of the department. She has been appreciated for her excellent Teaching Capacity and Counseling power. Her excellence has been recognized by the institutions and deputed her for different administrative roles in placement, admissions, accreditation, and training. She takes self-initiative through innovative teaching practices such as Case Study Method, Simulation classes, Application-based learning, Project-based learning, and Movie Reviews. She is working as a reviewer for 26 US and UK-based journals. She holds a lifetime membership in the International Society for Development and Sustainability (ISDS)."
    ]
  },
  {
    name: "Winfred Chelliah",
    role: "Associate Dean- Campus Affairs",
    qualifications: "M.A. English Literature | Expert in ELT & Communication Former Professor, Madras Christian College (29 years) Academic Leader & Student Mentor International Exposure – Studied in Germany",
    image: "/images/faculty/39.webp",
    slug: "winfred-chelliah",
    email: "winfredchelliah@vmls.edu.in",
    bio: [
      "Prof. M. Winfred Chelliah, as a professional entity, is a blend of an academic, an administrator, and a mentor. After working in reputed schools for 3 years as a Senior teacher of English, he served Madras Christian College with distinction for 29 years as a Professor of English, making significant contributions to English Language Teaching (ELT) for graduate and postgraduate students (both in theory and practice) with a well-defined career path to become teachers in schools or colleges. He was sent by the college to West Germany for a two-year music study program at the oldest university for Music. As a requirement, he completed a rudimentary course in German.",
      "As an administrator, he held challenging positions, such as Director of the Self-financed Stream at Madras Christian College, guiding 14 departments for 3 years, Dean of a residence hall for 4 years at MCC, Founding Principal of Alpha Arts and Science College, Founder and Senior Principal of Alpha School in Porur, Regional Head for institutional management in four states – Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh for the Ryan International Group of Institutions, Director of the Pearl Academic Leadership Institute of Velammal Group of Institutions, Principal of St. John’s International Residential School, and Dean of St. John’s Public School in Chennai. As a mentor, he possesses a natural attitude and flair for guiding young faculty members and counselling young adolescents in colleges. Through his initiatives and persistent efforts, Madras Christian College established a Center for Human Resource Development (HRD) that offers a two-semester value-added course for all graduate and postgraduate students. The course aims to equip them with life-oriented skills, making them more employable.",
      "Given his extensive experience in higher education and schooling, he serves as a reliable resource person for student interventions in crucial areas such as personality development, inculcation of values, fine-tuning for employability, communication, presentation, debating skills, and professional grooming on campus. He also excels in networking and building institutional rapport with schools."
    ]
  },
  {
    name: "Najeed Naved Siddiqui",
    role: "Assistant Professor",
    qualifications: "LLM (Constitutional Law) - National Law University Odisha",
    image: "/images/faculty/40.webp",
    slug: "najeed-naved-siddiqui",
    email: "najeedsiddiqui@vmls.edu.in",
    bio: [
      "Najeed Naved Siddiqui is a proficient academic and legal researcher working and scouting the crucial aspects of Constitutional Law and Food Security in the Indian scenario. Najeed has a keen interest in academic affairs and before joining VMLS he worked closely in exam coordination at his previous institution.",
      "He holds a Master of Laws degree from National Law University, Odisha, with a specialization in Constitutional Law. He has worked closely and addressed crucial issues concerning gender equality and the legislation pertaining to the transgender community of India. During his master's, he worked alongside the Labor and ESI Department, Government of Odisha and NLUO for the social mapping of migrant workers in Odisha.",
      "He has a Bachelor of Laws (B.A.LL.B Hons) from Aligarh Muslim University, Aligarh, and is an advocate enrolled in the Bar Council of Delhi, Delhi. In addition to his academic pursuits, he has collaborated with the People's Union for Civil Liberties on matters concerning women and child rights. Furthermore, he is a member representative for the International Society for Therapeutic Jurisprudence (India Chapter) and a member of GNHRE (The Global Network of Human Rights and the Environment).",
      "He has been awarded the ‘Best Paper’ award by the National Institute of Disaster Management (NIDM), Ministry of Home Affairs, Government of India for his paper ‘Implications of Climate Change on Food Security in India: Challenges and Opportunities’.",
      "His professional interests include Comparative Constitutional Law, Gender Justice, Law & Religion, and Jurisprudence. He possesses a strong inclination towards research and has authored and presented numerous papers at both international and national forums. Lastly, he shares a deep and ever-growing love for both football and philosophical thought."
    ]
  },
  {
    name: "Sowmiya Narayan Rajagopalan",
    role: "Assistant Dean PG Academics",
    qualifications: "LLM(Corporate Law) National Law University Jodhpur, MSc Law and Finance (Trinity College Dublin)",
    image: "/images/faculty/41.webp",
    slug: "sowmiya-narayan-rajagopalan",
    email: "sowmiyanarayan@vmls.edu.in",
    bio: [
      "Sowmiya Narayan Rajagopalan, a Chennai native, brings a rich array of experiences and academic accomplishments to his role as Assistant Professor at Vinayaka Mission's Law School (VMLS). He commenced his academic journey with undergraduate studies at the School of Law, SASTRA Deemed to be University, followed by the pursuit of advanced degrees in the legal domain. Notably, he earned his LL.M in Corporate Law from the esteemed National Law University Jodhpur, and furthered his academic pursuits with an MSc in Law and Finance from Trinity College Dublin.",
      "In addition to his academic achievements, Sowmiya has also engaged in practical legal experiences that have shaped his understanding of the field. Prior to joining VMLS, he dedicated himself to teaching legal studies to children at Bhavans Rajaji Vidhyashram in Chennai, nurturing a passion for education and mentorship. Furthermore, he honed his legal skills through practice before the esteemed Madras High Court, gaining invaluable insights into the practical applications of law.",
      "Sowmiya's areas of expertise encompass a wide spectrum, including Corporate and Commercial Law, International Law, and Criminal Law. His multidisciplinary background and diverse experiences contribute to his comprehensive understanding of the legal landscape. Beyond his legal pursuits, Sowmiya harbors a keen interest in sports, previously achieving recognition as a top 16 Table Tennis player in the country.",
      "With his unique blend of academic rigor, practical experience, and personal interests, Sowmiya Narayan enriches the academic milieu at VMLS, promising to inspire and mentor the next generation of legal professionals."
    ]
  },
  {
    name: "Ashwani Kumar Singh",
    role: "Assistant Professor",
    qualifications: "LLM Public Law, University College London (UCL)",
    image: "/images/faculty/42.webp",
    slug: "ashwani-kumar-singh",
    email: "ashwanikumarsingh@vmls.edu.in",
    bio: [
      "Ashwani Kumar Singh holds a Master's degree in LLM Public Law from University College London (UCL) and a Bachelor's degree in BALLB(Hons) from Gujarat National Law University, Gandhinagar. His academic journey is distinguished by notable achievements, including receiving Turing Funding and VDI Leadership Fund from UCL during his master's program. These grants enabled his participation in the ICONS Summer/Winter School for Junior Scholars, 2023 at the University of New South Wales (UNSW) and facilitated a research stay at the Gilbert + Tobin Centre of Public Law, UNSW.",
      "Ashwani is an active researcher with a keen interest in comparative constitutional law and theory, constitution-making, democracy, socio-economic rights, judicial review, and the philosophy of criminal law. He has presented working papers at prestigious conferences such as the ICONS Annual Conference 2022 and the ICONS Summer/Winter School for Junior Scholars 2023.",
      "Ashwani's dedication to academic excellence extends beyond research. He actively contributes to the legal community by regularly writing on constitutional and criminal issues. Moreover, Ashwani's interdisciplinary approach to legal studies reflects his passion for exploring complex societal issues through different lenses.",
      "Ashwani is also known for his involvement in extracurricular activities and his love for poetry, ghazals, and philosophical discussions."
    ]
  },
  {
    name: "Dr. Abhinaya Ramesh",
    role: "Assistant Professor (Senior Grade)",
    qualifications: "Ph.D - SASTRA Deemed to be University, LL.M IPR (Christ Deemed to be University, Bangalore)",
    image: "/images/faculty/43.webp",
    slug: "abhinaya-ramesh",
    email: "abhinayaramesh@vmls.edu.in",
    bio: [
      "Dr. Abhinaya Ramesh brings a wealth of expertise to Vinayaka Mission's Law School (VMLS). With more than five years of teaching experience, including roles as Assistant Professor II at SASTRA University, Dr. Abhinaya possesses a strong foundation in legal education.",
      "Her areas of interest includes Intellectual Property Law, Law of Torts, Contracts II, Criminology & Penology, Consumer Protection & Competition Law. Dr. Abhinaya has contributed significantly to the field through her published articles and presentations at prestigious conferences.",
      "Dr. Abhinaya Ramesh presented a paper titled \"Trusting a review: Tricky issues in consumer protection\" at the International Virtual Conference on New Facets of Consumer Law-Challenges and Way Forward. This paper was subsequently published in the edited book titled \"Consumer Law and Practice- Contemporary Issues and Way Forward.\"",
      "Additionally, her paper titled 'The Blurring of the Virtual and the Real: Internet Communities and Virtual Avatars' was presented at Media Meet 2022 (Media Technologies). She has also published few articles in blogs and journals.",
      "Dr. Abhinaya Ramesh's appointment further enriches the academic environment at VMLS, promising enhanced learning opportunities and academic excellence for our students."
    ]
  },
  {
    name: "Srinivas Raman",
    role: "Assistant Dean Academic Affairs UG",
    qualifications: "LL.M (European Master in Law and Economics)- Universität Hamburg and LUMSA, Rome",
    image: "/images/faculty/44.webp",
    slug: "srinivas-raman",
    email: "srinivasraman@vmls.edu.in",
    bio: [
      "Srinivas Raman is an Assistant Dean Academic Affairs UG of Law at Vinayaka Mission's Law School (VMLS). After completing his undergraduate degree from National Law University, Jodhpur in 2018, he launched his career as a corporate lawyer and worked with some of India's top law firms for around four years. During his law firm career, he represented renowned domestic and international clients from several sectors on a broad range of mandates. His practice areas primarily encompassed employment law, mergers and acquisitions, commercial, and regulatory law. In 2023, he was recognized for his expertise in labour and employment law by Legal 500, the largest global lawyer ranking directory.",
      "After gaining significant experience practicing corporate law, Srinivas decided to broaden his horizons and pursued an interdisciplinary LL.M. focused on the economic analysis of law. He studied at Universität Hamburg, Germany, and LUMSA, Italy, as part of the European Master in Law and Economics (EMLE) programme (2022-2023). While in Hamburg, Srinivas also briefly interned with the in-house legal department of one of the world's largest shipping companies where he gained critical insights into the complexities of the international shipping business.",
      "Post LL.M., Srinivas embarked on a career in legal academia. Driven by a passion for interdisciplinary scholarship, his intellectual pursuits extend across a diverse spectrum, including ESG, climate change, corporate governance, labour law, tort law, economic analysis of law, public policy, and literature. He also has a keen interest in analysing the evolution of legal education and the legal profession triggered by technological, societal, environmental, and economic changes.",
      "At VMLS, Srinivas aims to leverage his extensive academic and industry experience, along with his research interests, to advance the institution's vision. With a focus on inclusivity, diversity, and equipping learners with skills relevant to the contemporary legal landscape, VMLS aims to foster excellence in legal education and practice. Srinivas's dedication to these values aligns with the institution's mission to shape the law school of the future, where innovation, inclusivity, and justice intersect."
    ]
  },
  {
    name: "Dr. S. Suganya",
    role: "Associate Professor",
    qualifications: "PhD in Law (IPR) from VIT School of Law, Chennai",
    image: "/images/faculty/45.jpeg",
    slug: "s-suganya",
    email: "suganya@vmls.edu.in",
    bio: [
      "Dr. S. Suganya is an accomplished Associate Professor specializing in Intellectual Property Rights (IPR) law, with a strong focus on the intersection of AI, technology, and legal frameworks. She previously served as an Assistant Professor at Symbiosis Law School, Hyderabad, while her academic journey features a PhD in Law (IPR) from VIT School of Law, Chennai, with a thesis titled \"Anthropocentricity of Copyright Law and Artificial Intelligence: A Legal Study,\" alongside an ML in Intellectual Property Law, BL, and a BA in Sociology (university rank holder) from The Tamil Nadu Dr. Ambedkar Law University and Bharathiyar University.",
      "Her professional experience spans academia at Crescent School of Law, VIT School of Law, and Bharath Institute of Law, plus industry as a Senior Legal Associate and legal consultant at Enoah i Solution Private Limited handling civil litigation, bankruptcy, and insurance, complemented by contributions to BCI approvals, curriculum design, and NAAC processes.",
      "She has published Scopus-indexed publications. Admitted to the Bar Council of Tamil Nadu, she has presented papers in international conferences and enhanced her expertise through faculty development programs and certificate courses."
    ]
  },
  {
    name: "Dr. Fowmina",
    role: "Associate Dean (Inclusive Initiatives) Director, Centre for Access to Justice.",
    qualifications: "LLM - University of East London Uk, PhD - Vit Chennai",
    image: "/images/faculty/19.webp",
    slug: "fowmina",
    email: "fowmina@vmls.edu.in",
    bio: [
      "Dr. Fowmina. C holds a distinguished academic record, including a PhD in International Humanitarian Law from Vellore Institute of Technology, Chennai. Additionally, she possesses an LL.M degree in International Law, an M.A in Human Rights from the esteemed Indian Institute of Human Rights in New Delhi, and a degree in Criminal Justice from the University of East London. Her academic journey also includes a B.A.LLB from Bishop Cotton Women's Christian College, Bangalore.",
      "With a wealth of educational qualifications, Dr. Fowmina brings a substantial scholarly background to her role. Prior to her engagement with VMLS, she served as an Assistant Professor at SRM School of Law and Bharath Institute of Law. She also contributed her expertise as a Visiting Faculty member at the School of Excellence in Chennai.",
      "Dr. Fowmina's research accomplishments are evident through her inclusion in Scopus ID – 58199166800, which features several published works. She has further demonstrated her commitment to legal scholarship by serving as an Editor at The Law Brigade Publishers. Her intellectual contributions extend to numerous articles and chapters featured in reputable legal publications and books.",
      "Her research portfolio encompasses an array of significant themes, including international law, refugee law, women and children's rights, Criminal Justice, and human rights law. Dr. Fowmina.C's multifaceted expertise adds depth and distinction to her academic and professional profile."
    ]
  },
  {
    name: "Shubham Shukla",
    role: "Assistant Dean PG Academics",
    qualifications: "LL.M. (Corporate and Commercial Laws) Maharashtra National Law University, Mumbai",
    image: "/images/faculty/46.webp",
    slug: "shubham-shukla",
    email: "shubhamshukla@vmls.edu.in",
    bio: [
      "Shubham Shukla is an Assistant Dean PG Academics of Law at Vinayaka Mission's Law School (VMLS), bringing a rich blend of academic and professional experience. He is currently pursuing his PhD at the India International University of Legal Education and Research (IIULER), Goa, with research interests focused on Corporate Governance, Competition Law and Corporate Social Responsibility (CSR). He holds an LL.M. in Corporate and Commercial Laws from Maharashtra National Law University, Mumbai, and a B.A. LL.B. (Hons.) from Devi Ahilya Vishwavidyalaya (DAVV), Indore. He is also UGC NET qualified.",
      "Previously, Shubham served as an Assistant Professor at Amity Law School, Amity University Rajasthan, where he coordinated legal aid activities and ADR competitions as the Nodal Officer for the Pro Bono Club. He has held academic positions at Kingston Law College, Kolkata, and PSIT College of Law, Kanpur. His teaching expertise spans Corporate Law, Competition Law, Law of Contracts, and Banking Laws.",
      "Shubham has a strong publication record, with research published in indexed journals, and his work explores critical intersections between law, technology, and corporate practices. Notably, he has worked on a Department of Justice-backed project on the AI-based search engine Nyaya Setu, aimed at enhancing access to justice. In addition to his academic contributions, he has worked with Justice S.K. Misra (former judge of the Delhi High Court) in arbitration and contributed to a UNICEF-backed project on child rights. Aspiring to contribute to the growth of VMLS, Shubham is motivated by a commitment to foster legal education and inspire the next generation of legal professionals, believing that education is a powerful tool for social change."
    ]
  },
  {
    name: "Mike Ruban",
    role: "Assistant Dean Academic Affairs UGs",
    qualifications: "LLM International Law & Organisations (School of Excellence in Law, The Tamil Nadu Dr Ambedkar Law University)",
    image: "/images/faculty/47.webp",
    slug: "mike-ruban",
    email: "mikeruban@vmls.edu.in",
    bio: [
      "Mike Ruban, a multifaceted professional hailing from Chennai, seamlessly integrates his legal expertise with his fervent passion for writing. Since his formative years, his ardor for the written word has been an intrinsic part of his identity. Both academically and creatively, he has navigated the realms of writing with unwavering enthusiasm. His academic journey was marked by remarkable achievements, with the publication of ten research papers during his final year at The Tamil Nadu Dr Ambedkar Law University, The School of Excellence in Law, where he pursued his B. Com LL. B (Hons) and LL.M.",
      "Mike proceeded to carve a path in the legal arena, practicing as an Advocate in the esteemed High Court of Madras. Eager to expand his understanding of the legal domain, he pursued and successfully attained an LL.M in International Law and Organization, concentrating on the intricate field of Space Law, a testament to his commitment to the ever-evolving legal landscape. With aspirations of pursuing a Doctorate in the future, Mike aims to delve deeper into his academic pursuits while continuing to craft compelling narratives through his writing. A bibliophile at heart, he finds solace and inspiration amidst books, dedicating substantial time to various subjects ranging from Astronomy, Space Law, Psychology to the allures of fiction.",
      "Apart from his professional and academic endeavors, Mike embodies diverse interests. An avid supporter of Chelsea FC, he fervently follows the world of football. When not immersed in legal discourse or immersed in writing, he frequents the beach, a serene backdrop where he transcribes his musings while enjoying the melodic company of music or experimenting in the kitchen, concocting delectable culinary delights. His literary influences stem from the works of distinguished authors such as Sidney Sheldon, John Green, Jenifer Niven, and Paulo Coelho, whose narratives have left an indelible mark on his creative journey. To catch a glimpse of his insights and literary expressions, one can visit his blog at mikeruban.com, where occasional poems and articles illuminate his creative canvas. Additionally, he shares his experiences and snippets of life on Instagram through the handle mike_ruban17, inviting others to partake in his creative odyssey. His debut Novel, Value of Zero, was published by PAPERTOWNS."
    ]
  },
  {
    name: "Tathagat Sharma",
    role: "Assistant Dean PG Academics",
    qualifications: "Erasmus Mundus Scholar (EMLE), LL.B. (NLU Assam), LL.M. (South Asian University), Advocate (Supreme Court of India), and expert in Constitutional & International Law.",
    image: "/images/faculty/48.webp",
    slug: "tathagat-sharma",
    email: "tathagatsharma@vmls.edu.in",
    bio: [
      "Tathagat Sharma is an Erasmus Mundus Scholar who pursued his European Master in Law and Economics (EMLE) at his allocations at Erasmus University Rotterdam (the Netherlands), University of Hamburg (Germany), and Università di Roma LUMSA (Italy). Prior to his masters he was a practicing Advocate practising primarily at the Hon'ble Supreme Court of India.",
      "Tathagat graduated with an undergraduate degree in law from the National Law University and Judicial Academy Assam; and holds a Masters in Law from the South Asian University. He was engaged as a Chamber Junior with the Ld. Additional Solicitor General of India Mr Vikramjit Banerjee (Sr. Adv.), and was appointed as a Counsel for the Central Government before the Supreme Court by the Hon'ble President of India in 2022.",
      "He was also awarded the Youth Internet Governance Forum India Fellowship 2022, and is a Digital Defender Fellow 2022-2023 with Software Freedom Law Centre India. In his pastime, he enjoys writing on issues concerning Constitutional and International Law, and the Intersection of Law, Economics and Technology. He enjoys everything pop culture, including games, movies, series, and books. In his pastime, you may find him engaging in a trivia quiz, or roaming the streets of Rome, Paris or Istanbul in Assassin's Creed.",
      "He can be reached out at tathagatsharma@vmls.edu.in or tathagat@emle.eu"
    ]
  },
  {
    name: "Narayanan Chandrasekar",
    role: "Assistant Dean - Placement Training",
    qualifications: "LL.M ITL Jindal Global University",
    image: "/images/faculty/49.webp",
    slug: "narayanan-chandrasekar",
    email: "narayananchandrasekar@vmls.edu.in",
    bio: [
      "Narayanan Chandrasekar is a seasoned legal professional with diverse experience spanning litigation, corporate advisory, and academia. He holds an LL.M. in International Trade Law from O.P. Jindal Global University and brings expertise in criminal law, contract drafting, and regulatory compliance. His career includes working as a Litigation Associate at a prominent law firm in New Delhi and serving as an Assistant Professor at Chettinad Law School, Chettinad University, where he taught law students and medical professionals alike."
    ]
  },
  {
    name: "Dr. Alisha Verma",
    role: "Associate Professor",
    qualifications: "Ph.D. from Amity University, Rajasthan",
    image: "/images/faculty/alisha.jpeg",
    slug: "alisha-verma",
    email: "alishaverma@vmls.edu.in",
    bio: [
      "Dr. Alisha Verma is an Associate Professor of Law at Vinayaka Mission's Law School (VMLS), Chennai. She brings a strong blend of academic excellence, research depth, and practical legal experience. She holds a Ph.D. from Amity University Rajasthan, with her doctoral research focusing on the legality of commercial sex work in India. She is UGC-NET qualified and a gold medallist in her LL.M. from Amity University Rajasthan. She also holds an LL.B. from ILS Law College, Pune, and a B.Sc. in Bio-sciences from the University of Rajasthan.",
      "With more than a decade of experience spanning academia and legal practice, Dr. Verma has previously served as an Assistant Professor at Symbiosis Law School, Pune, Amity University Rajasthan, Manipal University Jaipur, and Raffles University. Prior to entering academia, she practiced as an advocate before the District & Sessions Court, Jaipur District in Rajasthan, handling matrimonial and criminal matters. Her teaching expertise includes Research Methods and Legal Writing, Criminal Procedural Law, Code of Civil Procedure, Law of Evidence, Drafting and Pleading, and allied procedural subjects. She has also actively contributed to academic administration, including roles in quality assurance, curriculum coordination, moot court activities, and judicial services training.",
      "Dr. Verma has a prolific research and publication record, with numerous papers published in Scopus indexed, Web of Science and peer-reviewed journals. Her scholarship engages with critical issues at the intersection of criminal law, human rights, gender justice, and socio-legal policy. She is the author of several books, including From Tolerance to Termination: Rethinking Laws on Commercial Sex Work in India, and has contributed chapters to reputed edited volumes published by Springer and other international publishers. In addition to academic writing, she is a regular columnist, with her articles appearing in platforms such as The Daily Guardian and The Print, where she addresses contemporary legal and policy debates.",
      "Beyond research and teaching, Dr. Verma has actively engaged in capacity-building initiatives, delivering expert lectures, conducting workshops for law enforcement officials, and serving as a judge and resource person in national and international moot court competitions and conferences. She also holds registered design patents and is associated with academic editorial work, serving as a Senior Editor at Law Teachers India and a member of editorial boards of international journals.",
      "Driven by a commitment to advancing legal education and social justice, Dr. Verma continues to contribute meaningfully to academia, research, and public discourse, with a vision to inspire future legal professionals and strengthen the interface between law and society. Beyond academia, she has a deep affinity for music & Urdu poetry, which continues to shape her creative and intellectual sensibilities."
    ]
  },
  {
    name: "Hartej Singh",
    role: "Assistant Professor",
    qualifications: "LLM(Corporate Law) National Law University, Jodhpur",
    image: "/images/faculty/hartej.webp",
    slug: "hartej-singh",
    email: "hartejsinghkochher@vmls.edu.in",
    bio: [
      "Hartej Singh is an Assistant Professor of Law at Vinayaka Mission's Law School (VMLS) with five years of experience, specializing in competition law, corporate governance, mergers and acquisitions, and public policy, with a strong focus on bigness and market concentration. His ongoing Ph.D. research critically analyzes the adequacy of India's competition law regime in curbing monopoly power and concentrated market structures.",
      "Hartej holds an LL.M. in Corporate Laws from National Law University, Jodhpur, and a B.A. LL.B. (Hons.) from the University School of Law and Legal Studies (USLLS), GGSIP University, New Delhi.",
      "He has contributed to numerous scholarly publications and regularly engages in academic conferences, presenting papers and leading discussions on corporate and competition law.",
      "In addition to his academic career, Hartej secured an All India Rank of 7 in the Judge Advocate General (JAG) selection for the Indian Army.",
      "Outside of academia, Hartej enjoys reading, listening to podcasts, exploring diverse cuisines, and is an avid chai enthusiast."
    ]
  },
  {
    name: "Abhinandita Biswas",
    role: "Assistant Professor",
    qualifications: "LLM (International Trade & Investment Law), O.P. Jindal Global University.",
    image: "/images/faculty/Abhinandita.webp",
    slug: "abhinandita-biswas",
    email: "abhinanditabiswas@vmls.edu.in",
    bio: [
      "Abhinandita is an academic with a keen interest in understanding International law & development in the Global South. She worked as a Junior Policy Consultant at The Outcast Collective, a Diversity, Equity & Inclusion (DEI) firm, assisting them in drafting a global POSH policy for one of their clients (a multinational company). She has also engaged extensively with Project 39A at National Law University Delhi, contributing to their communications program for prisoners. Her work involved collaborating with the mitigation investigation team, communicating with prisoners on death row through letters, and interviewing their families.",
      "She has completed her Master of Laws from Jindal Global Law School, specializing in International Trade and Investment Law where she was awarded The Vice Chancellor's Outstanding Leadership Award for All-Round Performance in the LLM cohort of 2023-24 and The Dean's Award for Outstanding All-Round Performer: Rank 1 from the LLM class of 2024. She graduated with a Bachelor's in Law from Adamas University, Kolkata, where she secured a silver medal for her academic performance in the five-year LLB cohort of 2018-2023.",
      "Her academic interests are rooted in international law, with a particular focus on third world approaches to international law, international trade law and public policy. Currently, she is exploring issues related to trade and climate change.",
      "Abhinandita is also deeply interested in history, sociology and vernacular literature and enjoys reading autobiographies and painting."
    ]
  },
  {
    name: "Kamala Priyadarshini",
    role: "Assistant Professor",
    qualifications: "L.L.M., Air and Space laws, McGill University Canada, LLM Corporate and financial law and policy, Jindal global law school, O.P. Jindal University",
    image: "/images/faculty/kamala.webp",
    slug: "kamala-priyadarshini",
    email: "kamalapriyadarshini@vmls.edu.in",
    bio: [
      "Ms. Kamala priyadarshini graduated from McGill University Canada, where she did her masters in air and space laws. Prior to that she had finished her masters degree from jindal global law school in corporate financial law and policy. She did her LLB From The central law college, Salem Tamilnadu.",
      "She has practised in the District court of Dindigul and The High court of Madras before pursuing her career in academia. Her research interest areas are aviation laws, private and public international air laws."
    ]
  },
  {
    name: "Dr. Gaurav Shukla",
    role: "Associate Dean - Research (Law)",
    qualifications: "Ph.D. in Juridical Science (International Taxation) from Chanakya National Law University in Patna, India.",
    image: "/images/faculty/gaurav.webp",
    slug: "gaurav-shukla",
    email: "gauravshukla@vmls.edu.in",
    bio: [
      "With a profound background in law, Dr. Gaurav Shukla holds a Ph.D. in Juridical Science (International Taxation) from Chanakya National Law University in Patna, India. In 2016, the Max Planck Institute for Tax Law and Public Finance, Munich, Germany, awarded him a prestigious scholarship (Max Planck Scholarship). He is also a visiting scholar at the Vienna University of Economics, Vienna, Austria.",
      "Dr. Shukla's academic tenure includes prestigious positions across the jurisdiction from HNLU to IIT-KGP to overseas universities. Before joining VMLS in 2024, he imparted legal knowledge at the University of South Pacific and as an Assistant Professor at the Indian Institute of Technology, Kharagpur, and other reputable institutions. His pedagogical contributions span a broad spectrum of law disciplines, with a particular focus on international taxation law, criminal law, and international trade law.",
      "Beyond teaching, Dr. Shukla is a prolific writer, having contributed to various national and international journals. His research work spans a wide array of topics, including tax treaty shopping, BEPS, transfer pricing, and the impact of legal frameworks on terrorism victims.",
      "Acknowledged for his professional excellence, Dr. Shukla has been honored by various organizations for his contributions to legal education and free legal aid. His commendable work extends to consultancy, where he advises on legal matters both in India and abroad."
    ]
  },
  {
    name: "Aarthy Jonathan Kennedy",
    role: "Assistant Dean - Partnerships & Student Engagement",
    qualifications: "LL.M in Constitutional Law & Human Rights from School of Excellence",
    image: "/images/faculty/aarthy.webp",
    slug: "aarthy-jonathan-kennedy",
    bio: [
      "Ms. Aarthy completed her Bachelor's degree in Law under a Central Government Merit Scholarship from The Tamil Nadu Dr. Ambedkar Law University, School of Excellence in Law, and went on to pursue her Master's in Constitutional Law & Human Rights. She has also obtained an M.Sc. in Psychology from TNOU. In addition to her academic accomplishments, she co-founded Head to Heart (mental health services) and is currently pursuing her Ph.D."
    ]
  },
  {
    name: "Dr. Muthuvelu",
    role: "Professor & Director of Global Tamil Law Center",
    qualifications: "Ph.D. in Legal Tamil - University of Madras",
    image: "/images/faculty/muthuvel.webp",
    slug: "muthuvelu",
    bio: [
      "Dr. Muthuvelu holds a doctorate in Legal Tamil and has over 23 years of teaching experience in Government Colleges and 5 years as Legal Translation officer. He was the first scholar to earn a doctorate from the University of Madras on the topic of \"Legal Tamil.\" He has also served in the Tamil Nadu Government Secretariat and as a member of the State Legal Official Language Commission.",
      "Dr. Muthuvelu is the author of 18 influential books, including Legal Tamil, Legal Principles in Sangam Tamil, and Legal Principles in Literature. He played a key role in developing the Legal Tamil curriculum currently offered in Government Law Colleges across Tamil Nadu. He has been part of the editorial board of Satta kathir, a leading monthly legal magazine, for the past 25 years."
    ]
  },
  {
    name: "Dr. Arun D Raj",
    role: "Associate Professor",
    qualifications: "Ph.D - University of Kerala, (LL.M) in Taxation Laws from Calicut",
    image: "/images/faculty/arun.webp",
    slug: "arun-d-raj",
    bio: [
      "Dr. Arun D Raj is an accomplished academician with over 13 years of industry and teaching experience. Apart from being specialized in Taxation Laws, Constitution, Environmental Law and International Investment Law, his expertise in the field of Institutional Ranking & Accreditations like BCI, NAAC, NIRF, QS, etc. has made him a prominent figure in an advisory capacity for numerous institutions. He is also part of Doctoral Committees of several prominent research institutions.",
      "Hailing from a small town in Kollam District of Kerala, after completing his school education, he secured his law degree from the prestigious Government Law College Trivandrum, Kerala in 2006 and his post-graduation (LL.M) in Taxation Laws from Calicut University in 2010. He qualified UGC-NET in 2014 and was awarded the Junior Research Fellowship (JRF). He has a Ph.D (University of Kerala) in Taxation laws in the topic of \"Enforcement of Penal Provisions in the Indian Income Tax Act\".",
      "During his PG years itself, he started teaching law papers for students in different educational institutions as a part time lecturer. After completing his post-graduation, he joined as a junior lawyer and practiced law in district and High Court. He has also worked as a Legal Compliance officer also handling international Mobility matters for the offshore unit of Allianz Insurance Inc. head quartered in Germany and the UK before joining full time research. In 2017, he appeared for the Kerala Judicial Service Examination and secured 41st rank in the state.",
      "In his academic experience he has worked in Trivandrum Government Law College, Law Schools of SRM University, Crescent University & Vellore Institute of Technology (VIT) before joining the VMRF family. Being an expert in Taxation law, Environmental Law and Constitution, he has made a mark of his own as a faculty and has also been a resource person and adjudicator in numerous national as well as international events. He is also a seasoned moot trainer with hands on experience in mooting and allied activities. He has played the role as an external moot trainer and also conducts several moot training courses and sessions for several institutions across the state."
    ]
  },
  {
    name: "Dr. Sachinkumar P.P.",
    role: "Assistant Professor",
    qualifications: "Ph.D. - IIT Kharagpur, LL.M. in Commercial and Environmental Law",
    image: "/images/faculty/sachin.jpeg",
    slug: "sachinkumar-p-p",
    email: "sachinkumar@vmls.edu.in",
    bio: [
      "Dr. Sachinkumar P.P. is an early-career academic and legal researcher specialising in Energy Law and Policy. Presently, he is working in the capacity of Assistant Professor of Law at the Vinayaka Mission's Law School, Vinayaka Mission Research Foundation-Deemed University. He is an Advocate enrolled with the Bar Council of Kerala. He holds a PhD from the Indian Institute of Technology Kharagpur, India, where he was a Recipient of a full scholarship from the Ministry of Education, Government of India. He also holds an LL.M. in Commercial and Environmental Law, for which he received a proficiency certificate for securing a position of merit from the Cochin University of Science and Technology, Kerala (CUSAT).",
      "Dr. Sachinkumar combines practical legal exposure with robust academic research. His research contributions include multiple publications in Scopus-indexed journals and reputed law reviews, and industry-specific magazines focusing on a strong interdisciplinary grounding in law, governance, and sustainability, particularly emphasising on emerging and niche aspects such as energy transition, coal acquisition, renewable energy policy, and electricity law. He has presented his work at leading national and international forums. He is actively engaged in academic and professional development. He has participated and contributed his expertise in several workshops on climate policy, energy economics, legal research, and responsible innovation. Sachinkumar's research and teaching interests lie at the intersection of Law and Policy with a focus on ensuring equitable and secure access to justice."
    ]
  },
  {
    name: "Avni Singh Solanki",
    role: "Assistant Professor",
    qualifications: "LL.M. in Business Law from ILS Law College, Pune.",
    image: "/images/faculty/avni.jpeg",
    slug: "avni-singh-solanki",
    email: "avnisingh@vmls.edu.in",
    bio: [
      "Avni Singh Solanki is an Assistant Professor of Law at Vinayaka Mission's Law School (VMLS), where she brings a well-grounded academic background and a developing research profile. Her academic interests include business law, technology and law and contemporary socio-legal developments with a particular focus on emerging regulatory frameworks in the digital economy. She is currently pursuing her Ph.D. at Maharashtra National Law University, Mumbai. Her doctoral research explores the evolving regulatory landscape and policy implementation of crowdfunding in India. Avni has published in Scopus, ABDC-indexed platforms and has presented her research at various National and International conferences.",
      "Avni holds an LL.M. in Business Law from ILS Law College, Pune, and completed her BLS LL.B. from Government Law College, Mumbai and has additionally completed diplomas in Cyber Law and Securities Law. Outside academia avni loves travelling, exploring and experimenting with food and enjoys swimming."
    ]
  },
  {
    name: "Kush Tanvani",
    role: "Assistant Professor",
    qualifications: "LL.M in Human Rights Law from the University of Nottingham",
    image: "/images/faculty/Kush Tanvani.webp",
    slug: "kush-tanvani",
    email: "kushtanvani@vmls.edu.in",
    bio: [
      "Kush is an environmental and human rights researcher with over five years of experience working at the intersection of law, policy, and regulatory governance. He holds a master's degree in Human Rights Law from the University of Nottingham, where he graduated with distinction as a Developing Solutions Scholar. During his time in the UK, he worked with the Business & Human Rights Resource Centre and the Environment Agency, focusing on regulatory governance and corporate accountability.",
      "He completed his undergraduate studies at the Institute of Law, Nirma University (2014-2019) on scholarship. His work has involved collaborating with policy research institutions and contributing to research and advocacy reports on environmental justice and regulatory reform. In 2025, he was awarded the Sakharov Fellowship of the European Parliament for his work on environmental and social justice issues. He has also completed summer school programmes at the University of Essex and the Global Campus of Human Rights (Venice) on full scholarships.",
      "His research interests include just energy transition, environmental justice, and the intersection of environmental governance and shrinking civic space. He has delivered lectures on Constitutional Law, Environmental Law, and Legal Research.",
      "Outside of academia, he enjoys cooking and is an avid follower of cricket and tennis."
    ]
  },
  {
    name: "Akshara Nair",
    role: "Assistant Professor",
    qualifications: "LL.M in International Law and Development from VIT School of Law, Chennai.",
    image: "/images/faculty/Akshara Nair.jpeg",
    slug: "akshara-nair",
    email: "akshara@vmls.edu.in",
    bio: [
      "Akshara Nair completed her B.A LL. B(Hons.) and Masters in International Law and Development from VIT School of Law, Chennai. She excelled in academics, recipient of fellowship and gold medal. She is passionate about Law from a very young age and deeply interested to enter in to academia. A curious researcher, pursuing her PhD with a keen attention in social responsibilities and law.",
      "She volunteered and interned with many NGOs working at the grass root level. She is a key note speaker on inclusion and started a group- 'Sibling advocates of persons with disabilities' in 2022. She has presented research papers in various International and National conferences, completed skill courses on mental health and law.",
      "Akshara Nair is an Assistant Professor at Vinayaka Mission's Law School (VMLS)."
    ]
  },
  {
    name: "Stalin Harikaran N",
    role: "Assistant Professor",
    qualifications: "LL.M in Maritime Law from Tamil Nadu Dr. Ambedkar Law University.",
    image: "/images/faculty/Stalin Harikaran N.jpeg",
    slug: "stalin-harikaran-n",
    email: "stalin@vmls.edu.in",
    bio: [
      "Stalin Harikaran N is a legal academic and researcher with a strong academic focus on maritime law and allied disciplines. He completed his undergraduate legal education at Tamil Nadu Dr. Ambedkar Law University, School of Excellence in Law. Building upon this foundation, he pursued a Master of Laws (LL.M.) in Maritime Law from Tamil Nadu Dr. Ambedkar Law University, where he developed knowledge of the legal frameworks governing shipping and marine commerce.",
      "Further, he obtained a Postgraduate Diploma in Alternative Dispute Resolution from NALSAR University of Law, gaining specialized knowledge in arbitration, mediation, and dispute resolution mechanisms. In June 2024, he successfully qualified for the UGC National Eligibility Test (NET), demonstrating his eligibility for teaching and research in higher education institutions across India.",
      "His research interests lie in maritime law, environmental law, and insurance law, with particular emphasis on ocean governance, environmental sustainability, maritime commerce, and risk management within the global shipping industry. Stalin has presented papers at several national and international conferences, actively contributing to scholarly discussions on contemporary developments in maritime law.",
      "Stalin Harikaran N is an Assistant Professor at Vinayaka Mission's Law School (VMLS)."
    ]
  },
  {
    name: "Dr. Jacob Joseph",
    role: "Professor of Law",
    qualifications: "Ph.D. in Environmental Law from School of Legal Studies, Cochin University of Science and Technology, Kochi",
    image: "/images/faculty/Dr. Jacob Joseph_Photo.jpeg",
    slug: "jacob-joseph",
    email: "jacobjoseph@vmls.edu.in",
    bio: [
      "Dr. Jacob Joseph is a Professor of Law at Vinayaka Mission's Law School. He holds an LL.M. from the School of Legal Studies, Cochin University of Science and Technology, with dual specialisations in Criminal Law and Human Rights Law, and a Ph.D. in Environmental Law from the same university. With over two decades of experience in legal academia, Dr. Joseph has made significant contributions to teaching, research, and institutional development. He began his academic career at the West Bengal National University of Juridical Sciences (WBNUJS), Kolkata, and was subsequently part of the founding faculty at the National University of Advanced Legal Studies (NUALS), Kochi, where he played a key role in shaping the institution in its formative years.",
      "Dr. Jacob Joseph has also served as Professor of Law and Associate Dean - Post Graduate Studies (Academics) at Saveetha School of Law, SIMATS (Deemed to be University), Chennai and also as the Head of the Post Graduate Studies and Research Department of Bharata Mata School of Legal Studies (BSOLS), Aluva, Kerala. Dr Jacob has delivered lectures as a visiting academic in various institutions, including a brief stint at the Australian National Centre for Ocean Resources and Security, University of Wollongong. An innovator in curriculum design, he has designed and introduced courses on fisheries law, food law and policy as well as national security and counter-terrorism laws. His research includes significant publications in fisheries law, environmental law, and criminal law, including the widely acclaimed book Select Legal and Policy Instruments on Marine Fisheries Conservation and Management.",
      "Dr. Jacob has advised international organisations, government agencies and statutory authorities, including United Nations Office on Drugs and Crime (UNODC), the Kerala State Planning Board, and the Commissionerate of Food Safety, Kerala. He has contributed to legal and policy reforms through consultancy reports and submissions, notably to the Joint Parliamentary Committee on Biological Diversity (Amendment) Bill, 2021. His work spans capacity-building initiatives for government officials, law enforcement personnel, judicial officers, and policymakers. Dr. Joseph is deeply committed to advancing inclusivity and academic excellence, with a strong emphasis on equitable learning environments, intellectual rigour, and professional competence aligned with VMLS's vision."
    ]
  },
  {
    name: "Abraham.S",
    role: "Assistant Professor",
    qualifications: "LL.M, School of excellence in law, Tamil Nadu Dr. Ambedkar Law University",
    image: "/images/faculty/Abraham.jpeg",
    slug: "abraham-s",
    email: "abraham@vmls.edu.in",
    bio: [
      "Mr. S. Abraham is a distinguished academic with a professional legal background. He holds a B.A., LL.B. (Hons.) and an LL.M. in Maritime Law with distinction, and has completed a PG Diploma in International Humanitarian Law from NALSAR University of Law. He is currently pursuing his Ph.D. at Saveetha School of Law, further strengthening his expertise and research capabilities in specialized areas of law.",
      "He previously served as an Assistant Professor at Hindustan School of Law. With over three years of combined experience in academia and legal practice, including his role as a junior advocate in reputed law firms, he brings valuable practical insights into the classroom. At his previous institution, he served as IQAC Coordinator, Ranking Coordinator, Event Coordinator, and Website and Social Media Coordinator, and was an active member of the DEC and BoS.",
      "He is actively engaged in research with publications in reputed book chapters and research articles listed in UGC CARE, with many Scopus-indexed and in Web of Science. His research interests include maritime law, environmental law, constitutional law, and socio-legal issues. He has presented papers at national and international conferences, and has contributed as a guest speaker and moot court adjudicator while organizing conferences, webinars, and moot court competitions to support student-centered legal education."
    ]
  },
  {
    name: "Dr Shabin O S",
    role: "Assistant Professor (Criminology)",
    qualifications: "PhD from University of Madras",
    image: "/images/faculty/Dr_Shabin.jpeg",
    slug: "shabin-o-s",
    email: "shabin@vmls.edu.in",
    bio: [
      "Dr Shabin O S holds a PhD from University of Madras. A criminologist and behavioural therapist at heart, he has expertise in counter-terrorism and de-radicalisation strategies. He has previously worked as an Assistant Professor at Rashtriya Raksha University, Puducherry, where he contributed as a student counsellor and also as Coordinator for the Puducherry Central Prison psycho social care and counselling center.",
      "Prior to joining academia, he worked as a behavioural therapist at the Dubai Autism Centre. His areas of interest include criminology, victimology, restorative justice, rehabilitation, reintegration and spiritual counselling."
    ]
  },
  {
    name: "Dr. Yazhini A",
    role: "Assistant Professor",
    qualifications: "Ph.D. in Agricultural Economics from Tamil Nadu Agricultural University",
    image: "/images/faculty/Dr. Yazhini A.jpeg",
    slug: "yazhini-a",
    email: "yazhini@vmls.edu.in",
    bio: [
      "Dr. Yazhini A is an Agricultural Economist with a strong academic background and extensive research engagement in agricultural policy, sustainability, marketing and trade, and rural development. Her work places special emphasis on Farmer Producer Organizations (FPOs), Micro, Small and Medium Enterprises (MSMEs), climate change, and technological innovations in the agrarian sector.",
      "Her doctoral research focused on impact analysis of Farmer Producer Organizations. She was associated with the Indian Council of Social Science Research (ICSSR) during her doctoral programme and also served as a Research Associate at the Madras Institute of Development Studies, where she contributed to a TNAPEX project aimed at improving the competitiveness of Tamil Nadu's food-processing MSME sector.",
      "Dr. Yazhini has earned several recognitions for academic and research excellence, including qualifying the ARS-NET examination, receiving the TAUPA Silver Jubilee Award for academic merit, and securing Best Oral Presentation awards at both national and international conferences related to climate change and agricultural marketing.",
      "She has published in reputed Scopus-indexed journals and has presented research at multiple national and international conferences, including academic forums in Turkey and Sri Lanka. In addition to her scholarly contributions, she brings strong analytical and technical capabilities with expertise in R, STATA, EViews, SPSS, and advanced data-visualization platforms, supported by extensive professional training in research methodology, climate change modelling, and agricultural marketing."
    ]
  },
  {
    name: "Dr. Anuttama Ghose",
    role: "Associate Professor",
    qualifications: "Ph.D. from School of Law & Justice, Adamas University, Kolkata",
    image: "/images/faculty/Anuttama.jpeg",
    slug: "anuttama-ghose",
    email: "anuttama@vmls.edu.in",
    bio: [
      "Dr. Anuttama Ghose is an Associate Professor of Law at Vinayaka Mission's Law School (VMLS), Chennai. She is presently pursuing a Postdoctoral Fellowship (in the area of Copyright Infringement and Enforcement Challenges on Open Access Platforms) from Tashkent State University of Law, Uzbekistan, under the Central Asian Legal Research (CALR) Fellowship Programme. She holds a B.A. LL.B. (IPR Hons.) from the School of Law, KIIT University, Bhubaneswar, and an LL.M (in Innovation, Technology and Intellectual Property Rights) from Symbiosis Law School, Pune, India. She completed her Ph.D. in 2023 in the area of Non-Conventional Trademarks from School of Law & Justice, Adamas University, Kolkata. She has also completed the CopyrightX Course, conducted by Harvard Law School & the Berkman Klein Centre for Internet & Society at Harvard University, in 2023, and the Patent Law and Global Public Health “PatentX” course, conducted by Harvard Law School & the WIPO Academy in 2026. She has previously worked as an Assistant Professor of Law at the School of Law, MIT World Peace University, Pune, and served as Vice Principal and Assistant Professor of Law at the Indian Institute of Legal Studies, Siliguri, West Bengal.",
      "An active researcher, she has authored over 60 research papers, including 37 Scopus-indexed publications in leading national and international journals, including the Journal of Intellectual Property Law & Practice (Oxford University Press), Journal of Intellectual Property Rights (CSIR-NIScPR), Journal of Asian and African Studies (SAGE Publications), Padjadjaran Journal of Law (Indonesia), Brazilian Journal of International Law, Novum Jus (Colombia), Economic and Political Weekly (EPW), Manchester Journal of Transnational Islamic Law & Practice (UK), Cambridge Journal of Climate Research and International Annals of Criminology, Cambridge University Press. She has contributed scholarly chapters to edited volumes published by Springer Nature and IGI Global, and is also the Co-Editor of an upcoming Springer Nature volume titled Colonial Continuities, Global Shifts, and Digital Transformations in IPR: Insights from Asia. Her research spans a range of themes, including intellectual property law, traditional knowledge, copyright and AI, digital surveillance, refugee rights, and gender justice. She is also serving as a reviewer of various prestigious journals indexed in Scopus and WoS. Currently, she is also serving as Co-Principal Investigator of an ICSSR-funded major research project on women-led justice systems in India."
    ]
  },
  {
    name: "S. M. Aamir Ali",
    role: "Assistant Professor (Senior Grade)",
    qualifications: "LL.M. in Human Rights Law from the National Law School of India University (NLSIU), Bengaluru",
    image: "/images/faculty/Aamir.jpeg",
    slug: "aamir-ali",
    email: "smaamir@vmls.edu.in",
    bio: [
      "Mr. S. M. Aamir Ali is an Assistant Professor of Law (Senior Grade) at Vinayaka Mission's Law School, Vinayaka Mission's Research Foundation (Deemed to be University), Chennai, Tamil Nadu, India. He is currently pursuing his Ph.D. at the West Bengal National University of Juridical Sciences (WBNUJS), Kolkata.",
      "Prior to joining Vinayaka Mission's Law School, he served as an Assistant Professor of Law at Symbiosis Law School, Pune, and earlier at the Indian Institute of Legal Studies, Darjeeling, West Bengal. He holds an LL.M. in Human Rights Law from the National Law School of India University (NLSIU), Bengaluru, and a B.A. LL.B. (Hons.) from Aligarh Muslim University, Murshidabad Campus.",
      "Mr. Ali has a strong research profile with 37 publications in Scopus-indexed journals, reflecting his active engagement with high-impact national and international academic scholarship. His work has appeared in reputed journals such as Statute Law Review (Oxford University Press), International Annals of Criminology (Cambridge University Press), Journal of Intellectual Property Law & Practice (Oxford University Press), Journal of Asian and African Studies (SAGE Publications), Economic and Political Weekly (EPW), Padjadjaran Journal of Law (Indonesia), Novum Jus (Colombia), Journal of Intellectual Property Rights (CSIR-NIScPR), Brazilian Journal of International Law, Manchester Journal of Transnational Islamic Law and Practice (UK), Cambridge Journal of Alternative Dispute Resolution and Cambridge Journal of Climate Research.",
      "In addition to journal publications, he has contributed scholarly chapters to edited volumes published by leading international publishers, including IGI Global, Springer Nature, Thomson Reuters, and Taylor & Francis. His forthcoming edited volume titled “Colonial Continuities, Global Shifts, and Digital Transformations in IPR: Insights from Asia” is scheduled for publication with Springer Nature, Singapore.",
      "Mr. Ali also serves on the review and editorial boards of several reputed national and international journals, including the Journal of Criminal Law (SAGE Publications), ILI Law Review (Indian Law Institute, New Delhi), Humanities and Social Sciences Communications (Springer Nature), Discover Global Society (Springer Nature), Journal of Human Rights and Social Work (Springer Nature), and the Manchester Journal of Transnational Islamic Law and Practice, among others.",
      "His research interests broadly include criminal law, constitutional law, human rights law, jurisprudence, intellectual property law, artificial intelligence, and digital surveillance."
    ]
  },
  {
    name: "Ms. Merlin Stephen",
    role: "Deputy Director of Admission",
    image: "/images/faculty/21.webp",
    slug: "merlin-stephen",
    bio: [
      "Merlin Stephen currently holds the designation of Deputy Director of Admissions at Vinayaka Mission's Law School, playing a key role in streamlining the student onboarding process. Ably supported by a dedicated team of passionate colleagues, she is responsible for advocating the vision, values, and culture of Vinayaka Mission's Law School while guiding the admissions process for undergraduate and postgraduate law programs.",
      "Previously, she served as Officer-in-Charge at the Dean's Office, where she was overseeing the comprehensive administrative functions of the department. Her role encompasses introducing the institution to prospective students and stakeholders, providing insights into eligibility criteria, scholarship opportunities, academic environment, faculty credentials, assessment methods, and the promising career prospects in law.",
      "With a distinguished career spanning over 30 years, she has gained extensive administrative expertise in leading international schools and colleges. She holds an M.Com. degree and has further refined her skills with a Postgraduate Diploma in Business Management from Stansfield School of Business, Singapore.",
      "Merlin's professional journey includes significant contributions to several founding institutions, highlighting her pivotal role in establishing and nurturing educational initiatives. Her vast experience and strong administrative acumen make her an invaluable asset to Vinayaka Mission's Law School, where she efficiently manages the diverse responsibilities of her role."
    ]
  },
  {
    name: "Mr. Victor",
    role: "Director- Administration",
    image: "/images/faculty/victor.jpeg",
    slug: "victor",
    bio: [
      "A seasoned administrative professional with over 30 years of diverse experience in managing institutional operations, human resources, infrastructure, and compliance functions across academic and corporate environments. Currently serving as Director of Administration at Vinayaka Mission's Law School (VMLS), to oversee end-to-end administrative functions to ensure operational excellence, regulatory compliance, and strategic growth.",
      "Mr. K. Victor expertise lies in building systems, streamlining administrative processes, optimizing resource utilization, and leading multidisciplinary teams with a focus on transparency and accountability. He brings proven capabilities in policy implementation, infrastructure development, campus security, budgeting, asset management, and stakeholder coordination. Recognized for transforming administrative frameworks and implementing institutional best practices, Mr. Victor has previously played key roles in institutions like IIBAT, MatrixView, St. Joseph's International Residential School, Zantel (East Africa) where he led initiatives that improved institutional efficiency and governance."
    ]
  },
  {
    name: "Ms. Kiran Jenifer",
    role: "Academic Affairs Executive",
    image: "/images/faculty/kiran.webp",
    slug: "kiran-jenifer",
    bio: [
      "Ms. Kiran Jenifer. She has a strong academic foundation in English Literature and Home Science. She holds a Bachelor's degree from Women's Christian College and Master's degree in English Literature. Her professional experience includes serving as a Junior Executive at Straive (under Springer Publishers). In addition, she has contributed as a Content Writer Intern for Gururo and InAmingos Foundation, preparing academic lecture materials, blogs, and articles on women's empowerment. Actively involved in academic and extracurricular activities, she has presented papers at national and international conferences on topics ranging from eco-criticism and science fiction to gender and social transformation, with one paper published in the CTTE College journal. Ms. Kiran Jenifer combines strong communication, leadership, and teamwork skills with a commitment to fostering impactful learning experiences."
    ]
  },
  {
    name: "Luke Jackson",
    role: "HR Manager",
    image: "/images/faculty/luke.webp",
    slug: "luke-jackson",
    bio: [
      "Luke Jackson serves as the HR Manager at VMLS, bringing over 12 years of rich experience in human resources. His career spans notable roles in both the corporate and education sectors. Luke's professional journey includes significant tenures at The World Bank and Ernst & Young (EY), where he honed his HR expertise. Additionally, he contributed to the academic field through his previous role at IIT Madras.",
      "Luke's educational background is rooted in commerce and management. He earned his Bachelor's degree in Commerce from Madras Christian College, and a MBA from Madras University. Throughout his career, Luke has been instrumental in team-building initiatives and has played a key role in implementing efficient HR processes.",
      "Luke loves to travel and meet new people and build networks. His experience and dedication make him a valuable asset to any organization, driving both people and processes towards excellence."
    ]
  },
  {
    name: "Ms. R. Sneha",
    role: "Senior Assistant Librarian",
    image: "/images/faculty/R. Sneha.jpeg",
    slug: "r-sneha",
    email: "sneha@vmls.edu.in",
    bio: [
      "Ms. R. Sneha is a UGC NET-qualified professional in library and information science, specializing in academic library services, with experience at the Indian School of Business (ISB).",
      "Her expertise encompasses research and reference support, electronic resource management (including academic databases and e-journals), serials control, and copyright permissions. She is skilled in cataloguing (MARC 21) and classification (DDC), along with digital resource management.",
      "At ISB, she supported research activities and facilitated access to scholarly information in a dynamic academic setting. She has also assisted in developing library information products, including newsletters, to enhance user engagement.",
      "Her professional focus is on strengthening research support and improving access to information in higher education."
    ]
  }
];

export default async function FacultyProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const faculty = facultyData.find((f) => f.slug === slug);

  if (!faculty) {
    // Return a default view for those without specific data yet
    return <DefaultFacultyView slug={slug} />;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb - Matching Dean Page Style */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/faculty-profiles" className="text-gray-500 hover:text-[#a31f34] transition-colors">Faculty Profiles</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">{faculty.name}</span>
        </div>
      </nav>
      <hr className="border-gray-100" />

      {/* Hero Section - Matching Dean Page Style */}
      <section className="pb-12 md:pb-16 pt-8 md:pt-12 px-[5%] bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Side: Photo */}
          <div className="lg:w-[40%] w-full order-1 flex justify-center items-center mb-8 lg:mb-0">
            <div className="relative w-[75%] max-w-[280px] md:w-full md:max-w-[420px] aspect-[3/4] bg-white p-1 shadow-[0_30px_70px_rgba(0,0,0,0.12)] border border-gray-100 transition-transform duration-500 hover:-translate-y-2">
              <div className="relative w-full h-full overflow-hidden border border-gray-200">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-[60%] order-2 flex flex-col justify-center">
            <h3 className="text-[#a31f34] uppercase tracking-[0.2em] text-sm font-bold mb-4">Faculty Member</h3>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 leading-tight">
              {faculty.name}
            </h1>

            <div className="space-y-6">
              <div className="space-y-1">
                <h4 className="font-inter text-xl md:text-2xl font-bold tracking-tight text-gray-800">
                  {faculty.role}
                </h4>
                {faculty.qualifications && (
                  <p className="font-inter text-lg text-[#a31f34] font-medium italic">
                    {faculty.qualifications}
                  </p>
                )}
              </div>

              {faculty.email && (
                <div className="flex items-center gap-3 text-gray-600 hover:text-[#a31f34] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${faculty.email}`} className="font-inter font-medium">{faculty.email}</a>
                </div>
              )}

              {/* Highlighted Intro Paragraph (First paragraph of bio) */}
              <div className="relative mt-8">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] md:w-[6px] bg-[#a31f34]"></div>
                <p className="pl-6 md:pl-8 font-inter text-lg md:text-xl text-gray-800 leading-relaxed font-medium italic text-justify">
                  {faculty.bio[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Bio Section - Professional & Structured */}
      {faculty.bio.length > 1 && (
        <section className="bg-white px-[5%] pt-8 pb-16 md:pt-10 md:pb-24 relative overflow-hidden">
          {/* Subtle Background Watermark */}
          <div className="absolute top-20 right-[5%] w-[300px] opacity-[0.03] pointer-events-none select-none">
            <Image 
              src="/images/vmls/vmls-arch.png" 
              alt="" 
              width={400} 
              height={400}
              className="grayscale"
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[2px] bg-[#a31f34]"></div>
              <h2 className="font-playfair text-3xl md:text-4xl text-[#1a1a1a] font-bold tracking-tight">
                Academic Biography
              </h2>
            </div>
            
            <div className="space-y-8 font-inter text-lg text-gray-700 leading-relaxed text-justify">
              {faculty.bio.slice(1).map((para, i) => (
                <p key={i} className="transition-all duration-300 hover:text-gray-900">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Decorative Architecture Element at Bottom Left */}
      <div className="fixed bottom-0 left-0 w-[300px] opacity-[0.05] pointer-events-none select-none z-0">
        <Image
          src="/images/vmls/vmls-arch.png" // Assuming this is the building sketch at the bottom
          alt=""
          width={400}
          height={400}
          className="grayscale"
        />
      </div>
    </main>
  );
}

function DefaultFacultyView({ slug }: { slug: string }) {
  // Fallback for faculty members whose bios haven't been added yet
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-10 text-center">
      <h1 className="font-playfair text-4xl mb-4 text-[#1a1a1a]">Profile Under Construction</h1>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        The detailed biographical content for this faculty member is currently being updated. Please check back shortly.
      </p>
      <Link href="/faculty-profiles" className="px-8 py-3 bg-[#a31f34] text-white font-bold rounded-lg hover:bg-[#800000] transition-colors">
        Back to Faculty Profiles
      </Link>
    </main>
  );
}
