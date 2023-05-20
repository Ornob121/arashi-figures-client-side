import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("| Blogs");
  return (
    <div>
      <div className="px-[200px]  my-12">
        <div className="mb-5">
          <p className="text-2xl text-red-400">
            Q1: What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>
          <p className="text-lg">
            Answer: Access and Refresh token are used to authorize the user if
            user have an access token he/she can get the data from the server
            unauthorized user cannot access that data from the server. Access
            token is given when the user signUp for a website alongside the
            refresh token access token have a limited lifetime thats why the
            user can use the refresh token to refresh the access token to use
            data without re login. We should store the token in the
            HTTP-only-cookies we can also store in the localStorage but storing
            in HTTP-only-cookies is more safe than storing in localStorage
            though it is not fully safe.
          </p>
        </div>
        <div className="mb-5">
          <p className="text-2xl text-red-400">Q2: SQL vs NoSQL databases.</p>
          <p className="text-lg">
            Answer: SQL is Structured Query Language and NoSQL is Not Only
            Structured Query Language the data on SQL are structured and on the
            NoSQL the data are non-structured or semi-structured. NoSQL data
            give the developer more flex compared to SQL data.
          </p>
        </div>
        <div className="mb-5">
          <p className="text-2xl text-red-400">Q3:What is express js?</p>
          <p className="text-lg">
            Answer: Express JS is a node js framework built on nodejs it allows
            us to develop backend server quickly and help us to maintain a clean
            code.
          </p>
        </div>
        <div className="mb-5">
          <p className="text-2xl text-red-400">Q4:What is Nest JS?</p>
          <p className="text-lg">
            Answer: Nest js is also a nodejs framework but it is built on
            express js it is known for being highly scalable and maintainable
            using modern JS and TS.
          </p>
        </div>
        <div className="mb-5">
          <p className="text-2xl text-red-400">
            Q5: What is MongoDB aggregate and how does it work?
          </p>
          <p className="text-lg">
            Answer:MongoDB aggregate is a process to store a large number of
            document in a collection. To store documents we have to send this
            documents through different stages the stages is also known as
            pipeline. We use aggregate like $set , $regex and $options etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
