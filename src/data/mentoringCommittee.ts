export type TextSegment = { text: string; bold?: boolean };

export type ContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; segments: TextSegment[] }
  | { type: 'list'; items: TextSegment[][] };

export type MentoringMember = {
  slug: string;
  name: string;
  role: string;
  designation: string;
  image: string;
  blocks: ContentBlock[];
};

export const mentoringMembers: MentoringMember[] = [
  {
    slug: 'dr-a-francis-julian',
    name: 'Dr. A. Francis Julian',
    role: 'Chair Person',
    designation: 'Senior Advocate, Supreme Court of India',
    image: '/images/committee1.webp',
    blocks: [
      {
        type: 'paragraph',
        segments: [
          { text: 'Dr. A. Francis Julian is a Senior Advocate in the Supreme Court of India with ', bold: false },
          { text: '46 years', bold: true },
          { text: ' of standing at the Bar. He has appeared in cases involving a wide range of laws, many of which have become reported judgments of the Supreme Court. He has also handled several cases involving universities and educational institutions.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'He is empaneled as a maritime arbitrator with the ', bold: false },
          { text: 'London Maritime Arbitrators Association', bold: true },
          { text: ' and the ', bold: false },
          { text: 'Indian Council of Arbitration', bold: true },
          { text: '.', bold: false },
        ],
      },
      { type: 'heading', text: 'Education' },
      {
        type: 'list',
        items: [
          [
            { text: 'Doctor of Juridical Science (S.J.D)', bold: true },
            { text: ' January 1985, Tulane University, New Orleans, La, USA. (Aug. 1982-Jan. 1985).', bold: false },
          ],
          [
            { text: 'Master of Comparative Laws (M.C.L)', bold: true },
            { text: ', May 1982. Southern Methodist University, Dallas, Tx., USA, (Aug. 1981-May 1982).', bold: false },
          ],
          [
            { text: 'Master of Laws (M.L.)', bold: true },
            { text: ', Sept. 1978, University of Madras, Madras, India.', bold: false },
          ],
          [
            { text: 'Post-Graduate Diploma in Criminology and Forensic Sciences (D.C.F.Sc.), Aug. 1976, University of Madras, Madras, India.', bold: true },
          ],
          [
            { text: 'Bachelor of Laws (B.L.)', bold: true },
            { text: ', June 1975, University of Madras, Madras, India.', bold: false },
          ],
          [
            { text: 'Bachelor of Science (B.Sc.)', bold: true },
            { text: ', May 1972, University of Madurai, Madurai, India.', bold: false },
          ],
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Dr. Julian was awarded the ', bold: false },
          { text: 'K.S. Naidu Memorial prize', bold: true },
          { text: ' by the Bar Council of Tamil Nadu in 1975 for securing the highest marks in procedural laws at Madras University in the 1975 Law Examination. He also secured the first rank in Master of laws Degree Examination of Madras University in 1978. He also secured first rank in D.C.F.Sc. Examination of Madras University in 1976.', bold: false },
        ],
      },
      { type: 'heading', text: 'Academic Activities' },
      {
        type: 'paragraph',
        segments: [
          { text: 'Dr. Julian is a Founder Member of the Governing Board, Board of Management and Academic Council of O.P. Jindal Global University, where he is also an Adjunct Professor of Law teaching ', bold: false },
          { text: 'International Commercial Arbitration', bold: true },
          { text: ' and ', bold: false },
          { text: 'Maritime Law', bold: true },
          { text: '. He also taught these subjects at the Indian Law Institute, New Delhi.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'He is also a Member of the Board of Management of Karunya University, and a past Member of the Academic Council of National Law University, Jodhpur, Rajasthan. Dr. Julian was also a Member of the University Grants Commission Committee on “Restructuring Legal Education” and drafted the Rules and the course materials for the one year LLM programme.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'He has been a resource person for training High Court Judges and District Judges in National Judicial Academy, Bhopal, Madhya Pradesh. He has delivered more than ', bold: false },
          { text: '100 presentations', bold: true },
          { text: ' of research papers and speeches in several national and international seminars.', bold: false },
        ],
      },
      { type: 'heading', text: 'Publications' },
      {
        type: 'list',
        items: [
          [
            { text: '“', bold: false },
            { text: 'International Banking and the Third World Debt Crisis-A Study on State Insolvencies”. Doctoral Dissertation – Tulane University, New Orleans, USA Dec. 1984.', bold: true },
          ],
          [
            { text: '“', bold: false },
            { text: 'Transnational Loan Agreements: Applicable Laws and Practice”, 1987(3) Supreme Court Cases (Journal) P. 49.', bold: true },
          ],
          [
            { text: '“', bold: false },
            { text: 'Applicability of Probation Laws to Offenders of New Forms of Crimes”, Issues on Probation in India, University of Madras, Madras, India. (1993)', bold: true },
          ],
          [
            { text: '“', bold: false },
            { text: 'Procedural Laws on Family Dispute Resolution in India,” National Reporter, International Association on Procedural Laws, XII World Congress, Mexico 2003.', bold: true },
          ],
          [
            { text: '“', bold: false },
            { text: 'Right to Information', bold: true },
            { text: '” Justice and Peace Commission, New Delhi (2005)', bold: false },
          ],
          [
            { text: '“', bold: false },
            { text: 'Legal Aspects of Disaster Management in India', bold: true },
            { text: '”, in “Disaster Management Law”, Indian Law Institute (2006).', bold: false },
          ],
          [
            { text: '“', bold: false },
            { text: 'Arbitration Law', bold: true },
            { text: '”, Annual Survey of Indian Laws, Indian Law Institute, New Delhi (2005, 2006,2007, & 2008).', bold: false },
          ],
          [
            { text: '“', bold: false },
            { text: 'Tsunami and Disaster Management law in India', bold: true },
            { text: '” in TSUNAMI AND DISASTER MANAGEMENT: LAW AND GOVERNANCE (Sweet & Maxwell Thomson). (2006)', bold: false },
          ],
          [
            { text: '“', bold: false },
            { text: 'Money Laundering Crime: Emerging International Legal Regime”, Indian Law Institute, New Delhi. (2008)', bold: true },
          ],
          [
            { text: 'Ed. Book “', bold: false },
            { text: 'Globalization and Good Governance', bold: true },
            { text: '”, (2010)', bold: false },
          ],
          [
            { text: '“', bold: false },
            { text: 'Future of Indian Universities: Need for a Liberalized Legal Regime”, THE FUTURE OF INDIAN UNIVERSITIES, C. Raj Kumar (Ed.), Oxford (2017)', bold: true },
          ],
          [
            { text: '“', bold: false },
            { text: 'Combatting Financing Terrorism', bold: true },
            { text: '”, Jindal Global Law Review, Vol.I, pp. 76-96, 2009', bold: false },
          ],
          [
            { text: '“', bold: false },
            { text: 'Admiralty Procedure Law Reform in India', bold: true },
            { text: '”, Lloyd Shipping and Trade Law (19) (6) (July/August 2019), p. 4-6.', bold: false },
          ],
        ],
      },
    ],
  },
  {
    slug: 'prof-dr-c-raj-kumar',
    name: 'Prof. (Dr.) C. Raj Kumar',
    role: 'Permanent Invitee',
    designation: 'Vice Chancellor, O.P. Jindal Global University',
    image: '/images/committee2.webp',
    blocks: [
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor (Dr.) C. Raj Kumar, a Rhodes Scholar, is the Founding Vice Chancellor of O.P. Jindal Global (Institution of Eminence Deemed To Be University) (JGU) in India. He was appointed as the VC at the age of 34 in 2009 when the university was established. JGU is one of only 20 universities in India and the only non-STEM university, which has been declared as an “Institution of Eminence” by the Government of India.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Kumar is an accomplished legal scholar and works in the fields of human rights and development, comparative constitutional law, terrorism and national security, corruption and governance, law and disaster management, legal education and higher education. He has seven books and over hundred and fifty publications to his credit and has published widely in peer reviewed journals, law reviews in Australia, Hong Kong, India, Japan, Singapore, UK and the USA.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Kumar has academic qualifications from the University of Oxford, Harvard University, University of Hong Kong, University of Delhi and Loyola College. He served as a faculty member at the School of Law of City University of Hong Kong, where he taught for many years. Professor Kumar was awarded the Rhodes Scholarship at the University of Oxford, UK, where he obtained his Bachelor of Civil Law (B.C.L.) degree; a Landon Gammon Fellowship at the Harvard Law School, USA, where he obtained his Master of Laws (LL.M.) degree and a James Souverine Gallo Memorial Scholarship at Harvard University. He received the Doctor of Legal Science (S.J.D.) from the University of Hong Kong. He also obtained a Bachelor of Laws (LL.B.) degree from the University of Delhi, India; and a Bachelor of Commerce (B.Com.) degree from the Loyola College, University of Madras, India.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Kumar conceived the idea of establishing India’s first ‘Global University’ and with the visionary leadership and philanthropic support of Mr. Naveen Jindal, established JGU in Sonipat, Haryana in 2009. JGU has completed a decade and has grown into a multidisciplinary and research-oriented university with nine different schools relating to law, business, international affairs, public policy, liberal arts & humanities, journalism & communication, art & architecture, banking & finance and environment & sustainability. JGU has acquired a stellar reputation in India and abroad for its effort to promote excellence in teaching, research, capacity building and community service.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'In recognition of its contributions, JGU was awarded the highest grade “A” by the National Assessment and Accreditation Council (NAAC). In 2018, JGU was granted “Autonomy” by the University Grants Commission (UGC) and the Ministry of Human Resource Development, Government of India becoming one of only two private universities in India to achieve this coveted recognition. JGU is also the Youngest Indian University to feature in the QS World University Rankings by breaking into the QS BRICS Rankings 2019 and QS Asia Rankings 2019. JGU is ranked among the top 800 universities in the world in the QS World University Rankings 2020.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'The Jindal Global Law School has been ranked among the top 150 law schools in the world in the QS World University Rankings 2020 – Law. It is also ranked the Number 1 law school in India.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Kumar’s scholarly articles have been published in the American University International Law Review, Asia Pacific Law Review, Australian Journal of Asian Law, Columbia Journal of Asian Law, Corporate Governance International, Denver Journal of International Law & Policy, Georgetown Journal of International Law, Hong Kong Lawyer, Human Rights Quarterly, Indian Journal of Criminology, Indian Journal of International Law, Indian Journal of Public Administration, ILSA Journal of International & Comparative Law, Indiana Journal of Global Legal Studies, Journal of the International Peace Research Institute, Journal of the National Human Rights Commission, Loyola of Los Angeles International and Comparative Law Review, Michigan State Journal of International Law, New England Journal of International and Comparative Law, Proceedings of the American Society of International Law, San Diego International Law Journal, Tulane Journal of International and Comparative Law, Tulsa Journal of Comparative and International Law and UC Davis Law Review. He has authored, co-authored, edited and co-edited seven books: The Future of Indian Universities (2017) (Editor-Oxford University Press); The Education President: Institution Building for Nation Building (2016) (Co-Author-Universal Law Publishing & LexisNexis); The President of India and the Governance of Higher Education Institutions (2016) (Co-Author-Universal Law Publishing & LexisNexis); Corruption and Human Rights in India: Comparative Perspectives on Transparency and Good Governance (2011) (Author-Oxford University Press); Human Rights and Development: Law, Policy and Governance (2006) (Co-Editor-LexisNexis); Tsunami and Disaster Management: Law and Governance (2006) (Co-Editor-Sweet & Maxwell Thomson); Human Rights, Justice and Constitutional Empowerment (2007) (Co-Editor-Oxford University Press).', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Kumar has contributed articles in newspapers and magazines published from Hong Kong, India and the UK, which include, South China Morning Post, The Standard, Frontline, The Hindu, Hindustan Times, Financial Express, The Tribune, The Pioneer, Seminar, Global-is-Asian, The Economic Times, The Times of India, The Indian Express, Deccan Herald, Deccan Chronicle, Economic & Political Weekly and Open Democracy. He has been interviewed on issues relating to law and justice, human rights and governance, and education by the media in Hong Kong, Japan and India, including radio and television: India Today TV, CNN IBN, News Now, Lok Sabha TV, Rajya Sabha TV, Star News, ATV, All India Radio, RTHK and NHK.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Kumar has held consultancy assignments in the field of human rights and governance. He has been a Consultant to the United Nations University (UNU), Tokyo; United Nations Development Programme (UNDP); UN Office of the High Commissioner of Human Rights, Geneva; and the International Council for Human Rights Policy (ICHRP), Geneva. He has advised the Commission to Investigate Allegations of Bribery or Corruption (CIABOC) in Sri Lanka and the National Human Rights Commission (NHRC) in India on issues relating to corruption and good governance. Professor Kumar is an Attorney at Law and is admitted to the Bar Council of Delhi, India and the Bar of the State of New York, USA.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Kumar also serves as the Founding Dean of Jindal Global Law School (JGLS) and Director of the International Institute for Higher Education Research & Capacity Building (IIHEd).', bold: false },
        ],
      },
      { type: 'heading', text: 'Education' },
      {
        type: 'list',
        items: [
          [
            { text: 'LL.B.', bold: true },
            { text: ' (University of Delhi)', bold: false },
          ],
          [
            { text: 'B.C.L.', bold: true },
            { text: ' (University of Oxford)', bold: false },
          ],
          [
            { text: 'LL.M.', bold: true },
            { text: ' (Harvard University)', bold: false },
          ],
          [
            { text: 'S.J.D.', bold: true },
            { text: ' (Hong Kong)', bold: false },
          ],
        ],
      },
    ],
  },
  {
    slug: 'mr-siddharth-raja',
    name: 'Mr. Siddharth Raja',
    role: 'Ex-Officio Member',
    designation: 'Executive Dean, Vinayaka Mission\'s Law School',
    image: '/images/mentor.webp',
    blocks: [
      {
        type: 'paragraph',
        segments: [
          { text: 'Executive Dean ', bold: false },
          { text: ' LL.M., University of Warwick School of Law, United Kingdom (Chevening & J. N. Tata Scholar).  B.A., LL.B. (Hons.), National Law School of India University (NLSIU), Bangalore — Gold Medalist.  Solicitor, Law Society of England & Wales.', bold: true },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Siddharth has a deep and abiding passion in academia – where he combines his rich practical expertise and experience gleaned over a three-decade old corporate law career, with a sharp and incisive doctrinal teaching excellence. His appointment as Dean of Vinayaka Mission’s Law School marks a high point in his journey in academia.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'A seasoned corporate lawyer and public intellectual, Siddharth has over 28 years focused his practice on private equity and venture capital transactions (both inbound and outbound); foreign-exchange law and enforcement, as well as related regulatory, compliance, and adjudicatory aspects); and on cross-border and domestic mergers and acquisitions. He has been highly ranked for several years, including by Chambers & Partners – lauded for his “global business perspective”, “attention to detail” and “excellent technical knowledge”.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'A Gold Medalist with a B.A., LL.B. (Hons.) law degree from the prestigious National Law School of India University (NLSIU), Siddharth also holds a Masters in Law from the University of Warwick Law School, where he was a British Council & Foreign and Commonwealth Office Chevening, and J. N. Tata, Scholar. Siddharth is admitted to the rolls of the Law Society of England & Wales as a Solicitor.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Siddharth merged (in December 2022), his corporate / commercial law and M&A / PE-VC practices and team with, and became a Senior Partner at, the pan-India niche, but full-service, law Firm VERTICES PARTNERS. In July 2019, Siddharth had co-founded the Bangalore-headquartered law firm, Saakshya Law; his fourth entrepreneurial law practice venture.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Siddharth previously co-founded Narasappa, Doraswamy & Raja in 2006, that merged in 2013 to form the pan-India, multi-city law Firm, Samvad: Partners. Siddharth broke-away and merged his practice with Argus Partners in 2016 and was that Firm’s Senior Partner & National Director until June 2019. All three of these firms or practices illustrate and represent Siddharth’s entrepreneurial streak.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Siddharth began his law career in 1998 in Mumbai with the pan-India, leading law firm at the time, Udwadia, Udeshi & Berjis. He has also worked in Hong Kong (between 2001 and 2004), with the international law firm, O’Melveny & Myers, where he specialized in cross-border M&A, primarily related to China and Indonesia.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Siddharth has been a Professor of Practice and Visiting Faculty at his alma mater, NLSIU, teaching several courses on corporate laws, M&A & investments, as well as history courses, to name a few. His is, proudly, one of the co-editors of the 18th Edition (2025) of Avtar Singh’s Company Law, India’s leading treatise on the subject.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Siddharth has been a Visiting Faculty member at the Department of Management Studies, Indian Institute of Science, India’s oldest management school. At the Indian Institute of Management, Bangalore, Siddharth lectures on business laws for MBA and other students (including for the education programs and other management development courses). He was also associated as a Visiting / Guest Faculty with the think-tank, The Takshashila Institution, and with the College of Supervisors (Reserve Bank of India). Siddharth has also delivered practice certificate courses at the BML Munjal University Law School, Haryana and at the Jindal Global Law School (JGLS). At JGLS, he was (in 2024-25) an Adjunct Professor of Corporate Legal Practice and the Director of The Michigan-Jindal Centre for Global Corporate & Financial Law & Policy.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Siddharth is a regular speaker on the academic and public lecture circuit in India and overseas, delivering talks on his key area of interest in the corporate law. He has delivered such special and distinguished addresses and workshops at the National Law Institute University, Bhopal; the BML Munjal University Law School, Haryana; the NALSAR University of Law, Hyderabad; the Maharashtra National Law University, Nagpur; the Gujarat National Law University, Gandhinagar; the India International University of Legal Education & Research, Goa; the Vinayaka Mission’s Law School, Chennai; the Assam Royal Global University Law School, Guwahati; the Strathmore Law School, Nairobi, Kenya, amongst others.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Siddharth is a twice elected Member of the Committee of the Bangalore International Centre (BIC), currently serving as the Chairperson of the BIC’s Program Committee – he has previously served for three terms as a Governor on the Board of the BIC. He was also a member of the Karnataka Government’s Bangalore Tourism Advisory Committee, established under the aegis of the then Hon’ble IT & BT and Tourism Minister of the State of Karnataka, Mr. Priyank Kharge.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'In addition to his other diverse interests, Siddharth is also a trained and certified professional mediator, at India’s leading conciliation firm, the Centre for Advanced Mediation Practice (CAMP). Siddharth serves (or has served) on several Boards of Indian companies, including, Nasmyth India; Direct Dialogue Initiatives; and Revsure AI Technologies. Siddharth is an advisor to the civil society Oorvani Foundation, which runs Citizen Matters.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'His love for history has led him to run a successful historical walking tour company Nandi Valley Walks, where he conducts and curates heritage trails in various places, in and around Bangalore, the Nandi Hills area, and at Hampi / Vijayanagara. In his spare time, Siddharth pursues historical research on the Princely State of Mysore, through the biographical prism of one of its Dewans, Sir Albion Rajkumar Banerji, I.C.S (Retd.), C.S.I., C.I.E.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Academic Qualifications', bold: false },
        ],
      },
      {
        type: 'list',
        items: [
          [
            { text: 'LL.M., University of Warwick School of Law, United Kingdom (Chevening Scholar & J. N. Tata Scholar).', bold: false },
          ],
          [
            { text: 'B.A., LL.B. (Hons.), National Law School of India University (NLSIU), Bangalore — Gold Medalist.', bold: false },
          ],
          [
            { text: 'Solicitor, admitted to the Law Society of England & Wales.', bold: false },
          ],
          [
            { text: 'Chair person, Centre for Post Graduate Legal Studies & Professor of Law.', bold: false },
          ],
        ],
      },
    ],
  },
  {
    slug: 'mr-j-suresh-samuel',
    name: 'Mr. J. Suresh Samuel',
    role: 'Ex-Officio Member',
    designation: 'Chief Strategy Officer, Vinayaka Mission\'s Research Foundation (Deemed University)',
    image: '/images/committee4.webp',
    blocks: [
      {
        type: 'paragraph',
        segments: [
          { text: 'Mr. Suresh Samuel graduated from the Government College of Engineering, Salem, and pursued Business Administration and Strategic Management programs with LIBA, Chennai, and Cornell University, USA respectively. He spent the initial decade of his career with leading multinational companies like Raptakos, Brett & Co. Ltd., PepsiCo India and Britannia Industries Limited specializing in Operations and Quality Management Systems.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'He switched to the IT industry in 2000 to manage Quality Management Systems and subsequently spearheaded Software Testing Practices in HCL Technologies. He also worked for iSOFT, Covansys, Computer Sciences Corporation (presently DXC Technologies), Encore Technologies, and UST Technologies in global roles such as General Manager, Vice President and Senior Vice President and has managed IT Services businesses in the USA, UK, Europe and the Asia Pacific.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Mr. Samuel has more than 31 years of industry experience in Pharmaceutical and FMCG, and as a Business Leader in IT Services, providing Testing Services to Banking, Financial Services, Insurance, Health Care Providers & Payers, Life Sciences, Automotive, Discrete Manufacturing, Technology, and Product companies.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'He co-founded Healthsana and is a Partner at SEMM Consulting specializing in Business Transformation. He is also a Member of the Board of Management with Vinayaka Mission’s Research Foundation.', bold: false },
        ],
      },
    ],
  },
  {
    slug: 'mr-vivek-dhokalia',
    name: 'Mr. Vivek Dhokalia',
    role: 'Ex-Officio Member',
    designation: 'Advocate Supreme Court of India and Adjunct Professor, VMLS',
    image: '/images/committee5.webp',
    blocks: [
      {
        type: 'paragraph',
        segments: [
          { text: 'Mr. Vivek Dhokalia grew up in Varanasi. He passed the Senior Cambridge examination in 1972 from St. John’s School, Varanasi and went on to do his B.A. (Honors) in Economics from Delhi University. Being keenly interested in the concept of justice, he pursued legal education from Banaras Hindu University (LL.B), Southern Methodist University(M.C.L) and Yale University( LL.M), where his mentor was Professor W. Michael Reisman.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Starting his legal career in 1981 as a junior to the eminent jurist, late Dr. L.M Singhvi, Mr. Dhokalia has practiced law in India continuously since 1986 in association with some of the nationally leading New Delhi based law firms, such as Singhania & Co. (October 1986-May 1987); Remfry & Son (June 1987-October 1988 as an Associate); J.B. Dadachanji & Co. (November 1988 to June 1992 as a Senior Associate); New Delhi Law Office (July 1992 -October 2003 as Partner; and K & S Partners (from November 2003 to December 2015 as a Partner). In the aforesaid roles, he worked on wide ranging issues concerning Corporate and Commercial matters and has assisted some major multinational companies with their India-bound investments including structuring and setting up Joint Venture operations in India. He has also extensively advised and litigated (particularly at the Delhi High Court and Supreme Court of India) on issues relating to both protection and enforcement of Intellectual Property and Technology Transfers and Licensing agreements.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'In the IP domain, he has been the legal counsel in some of the landmark reported IP cases including Polson Dairy, Revlon (Trademarks), Puneet Controls (Copyright), Lintech/Marvel Engineering (Patents), and United Breweries Ltd. (Kingfisher advertising case).', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Mr. Dhokalia also worked in 1982-83 as a Foreign Law Consultant to Wolf, Arnold & Cardozo in Washington D.C. where he was part of a small team led by the firm’s Managing partner Maurice Wolf which prepared and submitted to the Inter-American Development Bank a report containing recommendations for reforms to Foreign Investment Code of Republic of Guyana. In 2002, he was selected as the Legal Consultant of the Asian Development Bank project to advise on law reforms required in Bhutanese laws to promote Foreign Investments and in setting up a Dry Port at the Indo-Bhutan border.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'He has been a regular speaker for over 25 years at various conferences, seminars and workshops held by Ministry of Corporate Affairs (Government of India), Indian Law Institute, IIT Guwahati, National Technical Teachers Training Institute, Institute of Chartered Accountants, National Law University (Ranchi), Hamdard University School of Business, MSME Development Institute of the Ministry of Industry, WIPO, FICCI and Small Industry Associations in the NCR area. He is also occasionally invited to adjudicate student Moot Court competitions. As a Life Member of the Indian Society of International Law since 1986, he was a Member of its Executive Council between 2012-15. As a trademark practitioner dealing with international clients, he was also a Member (2005-06) of the Security Interests Sub-Committee of the International Trademark Association.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Since 2016, Mr. Dhokalia is an independent Legal Counsel on commercial transactions, commercial arbitration, Distribution contracts, Technology Licensing, and trademark and copyright protection and enforcement. He also acts as an Arbitrator and Mediator in private disputes. He was the Member of Arbitration Advisory Committee (2017 to 2021) of the Delhi University. He has edited two books, ’International Law Towards New Global Order’ (Taxmann: 2013) and ‘Human Rights, Values and Cultural Ethos’ (APC: 2018).', bold: false },
        ],
      },
    ],
  },
  {
    slug: 'prof-anand-prakash-mishra',
    name: 'Prof. Anand Prakash Mishra',
    role: 'Ex-Officio Member',
    designation: 'Professor of Practice & Vice Dean (JGLS) and Director of Law Admissions',
    image: '/images/committee6.webp',
    blocks: [
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Anand Prakash Mishra is an Associate Professor and Associate Dean at Jindal Global Law School of OP Jindal Global University.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Mishra obtained his Bachelor of Law (LL.B.) and Master of Law (LL.M.) degrees from the Campus Law Centre, Faculty of Law, University of Delhi and qualified UGC-NET in Law. He also earned a BA Honours in Economics from Patna University with a top rank. He has spent over two decades in the field of legal education and higher education and serving O.P. Jindal Global University for last 12 years.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Mishra teaches courses in Torts, Labour Law and Legal Methods at the law school. He is also a Fellow at the International Institute of Higher Education Research & Capacity Building (IIHEd). His areas of research include legal education and higher education in India. Professor Mishra is Director of Law Admissions of the University and provides leadership to admissions and outreach of the law school. He is in the relentless pursuit of making Jindal Global Law School as the most preferred destination of legal education in whole of Asia.', bold: false },
        ],
      },
      { type: 'heading', text: 'Education' },
      {
        type: 'list',
        items: [
          [
            { text: 'LLB.', bold: true },
            { text: '; ', bold: false },
            { text: 'LL.M.', bold: true },
            { text: ' (University of Delhi)', bold: false },
          ],
          [
            { text: 'UGC-NET(law)', bold: true },
          ],
        ],
      },
    ],
  },
  {
    slug: 'prof-dr-sreejith-sg',
    name: 'Prof. (Dr.) Sreejith S.G',
    role: 'Ex-Officio Member',
    designation: 'Executive Dean, Jindal Global Law School, O.P. Jindal Global University',
    image: '/images/committee7.webp',
    blocks: [
      {
        type: 'paragraph',
        segments: [
          { text: 'Prof. (Dr.) S.G. Sreejith is Professor and Executive Dean, Jindal Global Law School, O.P. Jindal Global (Institution of Eminence Deemed to be University). He holds LL.D. (with high honours) from the University of Lapland, M.Phil. from Jawaharlal Nehru University, M.B.L. and LL.B. both from the University of Kerala. Prior to joining JGLS, he worked with reputed institutions like the Arctic Centre, the University of Lapland, National University of Advanced Legal Studies (NUALS), and the University of Kerala. He is the author of “Transcending Jurisprudence: A Critique of the Architectonics of International Law” (Lapland: Lapland University Press, 2010). He has also published in journals like Third World Quarterly, Hastings International and Comparative Law Review, San Diego International Law Journal, California Western International Law Journal, Indiana International and Comparative Law Review, Journal of Space Law, Journal of Air Law and Commerce, San Joaquin Agricultural Law Review, Air and Space Law, Space Policy, Journal of Law and Social Deviance, Indian Journal of International Law, Journal of the Indian Law Institute, to name few. He sits on the editorial board of the Indian Journal of International Law (Springer). He has also served as special issue editor of Journal of Human Values (Sage) and Jindal Global Law Review (Springer).', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Sreejith is the winner of AAAF Brun Award and Medal instituted by the Association Aeronautique ET Astronautique De France. He has been awarded the “CIMO Fellowship” of the Government of Finland (2004) and the research grants of “Ella and Georg Ehnrooth Foundation” (2007), “Finnish Cultural Foundation” (2008), and “Finnish Lawyers’ Association (2009). His areas of interest are public international law, heterodox approaches to international legal thought, and air and space law. He is the Study Group Chair for Public International Law, International Association of Law Schools (IALS). He was also the CNISCO Overseas Visiting Fellow, at the Shanghai University of Political Science and Law.', bold: false },
        ],
      },
      { type: 'heading', text: 'Education' },
      {
        type: 'list',
        items: [
          [
            { text: 'LL.B.', bold: true },
            { text: '; ', bold: false },
            { text: 'M.B.L.', bold: true },
            { text: ' (University of Kerala)', bold: false },
          ],
          [
            { text: 'M.Phil.', bold: true },
            { text: ' (Jawaharlal Nehru University, New Delhi)', bold: false },
          ],
          [
            { text: 'LL.D.', bold: true },
            { text: ' (University of Lapland)', bold: false },
          ],
        ],
      },
    ],
  },
  {
    slug: 'mr-antony-r-julian',
    name: 'Mr. Antony R. Julian',
    role: 'Ex-Officio Member',
    designation: 'Advocate, Supreme Court of India and Convenor, Steering Committee, Centre for Justice through Technology, Vinayaka Mission\'s Law School (VMLS)',
    image: '/images/committee8.webp',
    blocks: [
      {
        type: 'paragraph',
        segments: [
          { text: 'Mr. Antony R. Julian is a trained International Commercial Arbitration counsel who is briefed for Arbitrations as well as Court Litigation before various courts in India. He has regular appearances in commercial and civil disputes before the Supreme Court of India, various State High Courts, the National Company Law Appellate Tribunal (NCLAT), National Company Law Tribunal (NCLT) and District Courts.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'He began practice in the chambers of Mr. Salman Khurshid, Sr. Advocate, where he appeared in several cases in which reported judgments were rendered. Mr. Julian is a Member of the Chartered Institute of Arbitrators, London. He holds a degree in Law from University College London and a Bachelor’s degree in Economics from Loyola College, Chennai.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Mr. Julian has advised and represented a number of educational institutions in various legal fora.', bold: false },
        ],
      },
    ],
  },
  {
    slug: 'dr-padmanabha-ramanunjam',
    name: 'Dr. Padmanabha Ramanunjam',
    role: 'Ex-Officio Member',
    designation: 'Dean of Academic Governance, JGU and Professor of Law, JGLS',
    image: '/images/m2.webp',
    blocks: [
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Ramanujam was awarded the Distinguished Asia Link Fellowship, sponsored by the European Union at Hamburg University Institute of Law and Economics, Germany and the National Law School of India University, Bangalore. He holds a Master of Laws (LL.M.) degree in Intellectual Property Rights from the University of East Anglia, UK, with a distinction. At the University of East Anglia, he was awarded the prestigious University of East Anglia International Scholarship, Norwich Law School Scholarship and was also adjudged the University of East Anglia & Best International Applicant Award. He also holds a Master of Business Laws degree from the National Law School of India University, Bangalore and Bachelor of Law degree (B.A.L., LL.B.) from University Law College, Bangalore University.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'He served as Dean, IFIM Law School. He also contributed as a Chief Knowledge Officer at QS IGauge wherein he was responsible for the design and development of 17 subject indicators to rate Universities and Colleges in India. As a Consulting Advisor working for LSAC (Law School Admissions Council), USA, Professor Ramanujam was responsible for spearheading outreach and marketing efforts, which led to record registration for LSAT India exam takers (8300 plus) leading to 20.5% YoY growth. He was instrumental in collaborating with 250 plus coaching institutes, 300+ schools and 600+ principals across India. He personally addressed more than 15000 students across India. He was responsible for organizing Discover Law Campaign, participated by 25 International Universities and 20+ Indian Universities, which was attended by 1500 plus students. He was also instrumental in organizing Law and Technology Symposium, attended by International Lawyers, Senior Advocates and Top Law Firm Partners in India.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Ramanujam started his academic stint as a founding faculty member at O. P. Jindal Global University where he served as Associate Professor and Associate Dean (Admissions and Outreach), Director – Admissions and Outreach and Joint Registrar- Institution Building. He was responsible for carving out the governance structure and regulatory framework for establishing O.P. Jindal Global University and saw through it for a period of 8 years.', bold: false },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Professor Ramanuajm specializes in law and economics, intellectual property law, competition law, economic analysis of tort law, and economic analysis of contract law. He was among the scholars invited by the President of India to write a book on the Governance of Higher Education Institutions during President Pranab Mukherjee’s term. The research culminated into a book published by LexisNexis titled as “The President of India and the Governance of Higher Education Institutions”.', bold: false },
        ],
      },
    ],
  },
];

export function getMentoringMemberBySlug(slug: string) {
  return mentoringMembers.find((member) => member.slug === slug);
}

export const mentoringKeyMemberSlugs = [
  'dr-a-francis-julian',
  'prof-dr-c-raj-kumar',
  'mr-siddharth-raja',
] as const;

export function getMentoringKeyMembers() {
  return mentoringKeyMemberSlugs.map((slug) => getMentoringMemberBySlug(slug)!);
}

export function getMentoringExOfficioMembers() {
  return mentoringMembers.filter(
    (member) => !mentoringKeyMemberSlugs.includes(member.slug as (typeof mentoringKeyMemberSlugs)[number])
  );
}
