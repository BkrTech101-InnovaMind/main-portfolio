import Layout from "../Layout/Layout"
import TypeWriter from "../TypeWriter"

export default function HomePage() {
  return (
    <Layout>
      <TypeWriter
        startingTimer={10}
        endingTimer={2000}
        isSingleText={true}
        texts={["Welcome to my portfolio!"]}
        textColor={"#9f8"}
        backGroundColor={"#9f8f1f"}
      />
    </Layout>
  )
}
