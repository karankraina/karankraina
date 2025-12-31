import Layout from "../components/layout/layout";
import Avatar from "../components/avatar/index";
import Comment from "../components/code/comments";
import CodeContainer from "../components/code/container/container";
import Statement from "../components/code/container/Statement";
import Function from "../components/code/container/function";


export default function About() {
  return (
    <Layout>
      <Avatar
        src="/images/karan-raina.jpeg"
        edge={150}
        alt="Karan Raina"
      />
      <CodeContainer>
      <Comment text="Go back to homepage" />
        <Function label="goBack()" href="/" />
        <Comment text="TODO: Set up profile..." newLine={true} />
        <Statement
          content={[
            {
              color: "orange",
              text: "const"
            },
            {
              color: "white",
              text: " name"
            },
            {
              color: "orange",
              text: " ="
            },
            {
              color: "green",
              text: ' "Karan Raina"'
            },
          ]}
        />

        <Statement
          content={[
            {
              color: "orange",
              text: "const"
            },
            {
              color: "white",
              text: " role"
            },
            {
              color: "orange",
              text: " ="
            },
            {
              color: "green",
              text: ' "Web Developer"'
            },
          ]}
        />

        <Statement
          content={[
            {
              color: "orange",
              text: "const"
            },
            {
              color: "white",
              text: " knows"
            },
            {
              color: "orange",
              text: " ="
            },
            {
              color: "green",
              text: ` ${JSON.stringify(['Javascript', 'Node.JS', 'Angular', 'React JS'], null, 2)}`
            },
          ]}
        />

        <Statement
          content={[
            {
              color: "orange",
              text: "const"
            },
            {
              color: "white",
              text: " canDeployOn"
            },
            {
              color: "orange",
              text: " ="
            },
            {
              color: "green",
              text: ` ${JSON.stringify(['RedHat OpenShift', 'Heorku', 'Vercel', 'AWS'], null, 2)}`
            },
          ]}
        />
        <Comment text="Read more about me" />
        <Function label="viewAbout()" href="/about" />

        <Comment text="click to watch my YT videos" />
        <Function label="watchVideos()" href="/about" />

        <Comment text="click to read my blogs" />
        <Function label="viewBlogs()" href="/about" />
      </CodeContainer>
    </Layout>
  );
}