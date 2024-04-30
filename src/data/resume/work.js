/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Hologic Inc.',
    position: 'Software Engineering Co-op (Breast and Skeletal Health)',
    url: 'https://www.hologic.com/',
    startDate: '2022-07-01',
    endDate: '2022-12-01',
    summary: 'Hologic specializes in women\'s health products. I worked on many devices spanning disciplines (embedded to application level) including full-body imaging, '
    + ' bone density scanning, and radiation-based tumor marking. The company produced products for cervical cancer surgery as well. I went on my first business trip to the Delware offices of Hologic to work in the clean rooms on TruNode'
    + ' embedded development! This was a fantastic and innovative company to work for. Development was again waterfalled with release stages for '
    + 'various apps and hardware iterations being performed monthly and biweekly respectively.',
    highlights: [
      'Project lead on the development of the TruNode Single-use Gamma Probe (Embedded C++ and Android application) for radiation-based breast tumor marking',
      'Automated machine controller application testing using shell scripting and Ranorex (C# environment) for the Horizon DXA System',
      'Maintained and built upon a large C++ code base for the APEX medical imaging system',
    ],
  },
  {
    name: 'Delta Dental of RI',
    position: 'Software Engineering Co-op (IS/IT)',
    url: 'https://www.deltadentalri.com/',
    startDate: '2021-07-01',
    endDate: '2021-12-01',
    summary: 'I had an interesting time working at DDRI. The tech stack was fairly old interally, and the team was very small (about 6 total in IS).'
    + ' This co-op was a great opporunity to work on my requirements gathering for individual client-centric work as well as'
    + ' a neat first step into SWE with my first work on a waterfall model and a dev/stage/prod setup.',
    highlights: [
      'Designed and implemented a company-wide intranet site. Used XML, PowerApps, SharePoint.',
      'Reworked existing C# codebases. Refactored company API’s to facilitate interactions between lines of business',
      'Administrated Oracle databases in, writing queries, solving employee tickets, and unlocking users.',
      'Assisted in the writing and design of interactions between an AI third-party to automate claims.',
    ],
  },
  {
    name: 'ProEarth Tech',
    position: 'Computer Technician',
    url: 'https://www.ebay.com/str/proearthtech',
    startDate: '2019-07-01',
    endDate: '2020-09-01',
    summary: 'This was really unexpectedly neat job and I do miss its variety. The business took in e-waste (anyhting with a plug), then refurbished that which was worth reselling.'
    + ' I saw a lot of neat older machines from the DoD, plenty of Nintendo handhelds, and many carts of school laptops. This was basically an older tech'
    + ' "chop shop", which I thought was really cool.',
    highlights: [
      'Repaired all models of laptops by hand, including HP, Dell, Lenovo, Acer, Asus and more.',
      'Refurbished desktops including PC’s and iMacs.',
      'Partitioned and wiped drives using software such as Parted Magic and DBAN.',
    ],
  },
];

export default work;
