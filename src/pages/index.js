import React from "react";
import { getUser, isLoggedIn } from "utils/auth";
import LayoutMain from "layouts/layout-main";
import { SEO } from "components/shared/seo/seo";
import { Link } from "gatsby";

const IndexPage = () => (
  <LayoutMain>
    <SEO />
    <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
    <p>
      {isLoggedIn() ? (
        <>
          You are logged in, so check your{" "}
          <Link to="/app/profile">profile</Link>
        </>
      ) : (
        <>
          You should <Link to="/app/login">log in</Link> to see restricted
          content
        </>
      )}
    </p>
  </LayoutMain>
);

export default IndexPage;
