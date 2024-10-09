interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Education Geographics',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/projects/egsapp.png',
    href: '/blog/education-geographics',
  },
  {
    title: 'Kenmore Bridge Club',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/projects/KBC.jpg',
    href: '/blog/kenmore-bridge-club',
  },
  {
    title: 'Mansoft',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/projects/mansoft.png',
    href: '/blog/education-geographics',
  },
  {
    title: 'ManasConsults',
    description: `Landing page for personal business built using NextJS, Postgres and deployed on Vercel.`,
    imgSrc: '/static/images/projects/manasconsults.png',
    href: '/blog/manas-consults',
  },
  {
    title: 'MyFin',
    description: `Finance App built using NextJS, Postgres and deployed on Vercel.`,
    imgSrc: '/static/images/projects/manasconsults.png',
    href: 'https://dashboard.manasconsults.net',
  },
]

export default projectsData
