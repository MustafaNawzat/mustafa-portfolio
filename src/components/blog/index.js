import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { BASIC_RUL } from "../../api";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  useEffect(() => {
    (async () => {
      let response = await fetch(`${BASIC_RUL}/articles`);
      if (response.status === 200) {
        response = await response.json();
        setPosts(response);
      } else {
        setErrorMsg(true);
      }
    })();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <h3 className="text-center mb-3">All Articles</h3>
        <Row>
          {errorMsg ? (
            <Col>
              <p className="text-center mt-5">No articles yet ..</p>
            </Col>
          ) : (
            posts.map((post, i) => (
              <Col key={i} md={6}>
                <div className="card mt-3">
                  <div className="card-body">
                    <Link className="post-link" to={`articles/${post.slug}`}>
                      {post.title}{" "}
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.71875 0.125L9.46875 0.34375C9.34375 0.5 9.34375 0.71875 9.46875 0.875L12.0938 3.46875H0.375C0.15625 3.46875 0 3.65625 0 3.84375V4.15625C0 4.375 0.15625 4.53125 0.375 4.53125H12.0938L9.46875 7.15625C9.34375 7.3125 9.34375 7.53125 9.46875 7.6875L9.71875 7.90625C9.84375 8.0625 10.0938 8.0625 10.25 7.90625L13.875 4.28125C14.0312 4.125 14.0312 3.90625 13.875 3.75L10.25 0.125C10.0938 -0.03125 9.84375 -0.03125 9.71875 0.125Z"
                          fill="#111111"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
};

export default Blog;
