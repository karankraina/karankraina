import Layout from "../components/layout/layout";
import Avatar from "../components/avatar/index";
import Comment from "../components/code/comments";
import CodeContainer from "../components/code/container/container";
import Statement from "../components/code/container/Statement";
import Function from "../components/code/container/function";


export default function Home() {
  const knows = {
    languages: ['JavaScript', 'TypeScript', 'Angular', 'React JS', 'HTML', 'CSS',],
    databases: ['PostgreSQL', 'MongoDB', 'SQLite', 'Firebase',],
    devOps: ['RedHat OpenShift', 'Heroku', 'Vercel'],
  };
  return (
    <Layout>
      <Avatar
        src="/images/karan-raina.jpg"
        edge={150}
        alt="Karan Raina"
      />
      <CodeContainer>
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

<Statement
          content={[
            {
              color: "orange",
              text: "const"
            },
            {
              color: "white",
              text: " canStoreIn"
            },
            {
              color: "orange",
              text: " ="
            },
            {
              color: "green",
              text: ` ${JSON.stringify(['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase Datastore'], null, 2)}`
            },
          ]}
        />
<p></p>
<Statement
          content={[
            {
              color: "orange",
              text: "const"
            },
            {
              color: "white",
              text: " knowsUnitTesting"
            },
            {
              color: "orange",
              text: " ="
            },
            {
              color: "purple",
              text: " true"
            },
          ]}
        />
        {/* <Comment text="Read more about me" />
        <Function label="viewAbout()" href="/about" /> */}

        <Comment text="click to watch my YT videos" />
        <Function label="watchVideos()" href="https://www.youtube.com/channel/UCjCOdR3PAwnPIFq1OS_c0dQ" />

        <Comment text="click to read my blogs" />
        <Function label="viewBlogs()" href="https://js.karanraina.tech/" />
      </CodeContainer>
    </Layout>
  );
}