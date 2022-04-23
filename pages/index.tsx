import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';

type Props = {
  content: string,
  data: {
  title: string,
  cats: Array<{
    name: string,
    description: string
  }>
}
}

const Page: NextPage<Props> = ({ content, data }) => (
  <ul>
    {data.cats.map((cat) => (
      <li key={cat.name}>{cat.name}</li>
    ))}
  </ul>
)

export const getStaticProps: GetStaticProps = async (context) => {
  const page = matter.read('./content/home.md')
  console.log(page);
  return {
    props: {
      content: page.content,
      data: page.data
    },
  }
}

export default Page