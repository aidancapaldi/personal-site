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
    name: 'Delta Dental of RI',
    position: 'Software Engineering Co-op',
    url: 'https://www.deltadentalri.com/',
    startDate: '2021-07-01',
    endDate: '2021-12-01',
    summary: 'f',
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
    summary: 'f',
    highlights: [
      'Repaired all models of laptops by hand, including HP, Dell, Lenovo, Acer, Asus and more.',
      'Refurbished desktops including PC’s and iMacs.',
      'Partitioned and wiped drives using software such as Parted Magic and DBAN.',
    ],
  },
];

export default work;
