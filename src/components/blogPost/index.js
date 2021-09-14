import React, { useState, useEffect } from "react";
import "./style.css";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { BASIC_RUL } from "../../api";
import ClipLoader from "react-spinners/ClipLoader";

const BlogPost = () => {
  const slug = useParams().slug;
  const [post, setPost] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let response = await fetch(`${BASIC_RUL}/articles/${slug}`);
      if (response.status === 200) {
        response = await response.json();
        setPost(response);
        setLoading(false);
      } else {
        setErrorMsg(true);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loadingSpinner">
          <ClipLoader></ClipLoader>
        </div>
      ) : null}

      <Container className="mt-5">
        <Row>
          <Col>
            {errorMsg && !loading ? (
              <div className="text-center mt-5">
                <h1>404</h1>
                <Link className="h4" to="/articles">
                  Back to articles
                </Link>
              </div>
            ) : (
              <>
                <h1 className="postTitle">{post.title}</h1>
                <div>
                  {post.id ? (
                    <div className="mb-3">
                      <span className="text-muted">Written by</span>{" "}
                      <span>Mustafa Nawzat</span> |{" "}
                      <span>{post.created_at.split("T", 1)}</span>
                    </div>
                  ) : null}

                  {/* {post.categories
                    ? post.categories.map((c) => (
                        <p className="d-inline-block text-uppercase" key={c.category}>
                          {c.category},
                        </p>
                      ))
                    : null} */}
                </div>

                <ReactMarkdown
                  transformImageUri={(uri) =>
                    uri.startsWith("http") ? uri : `http://localhost:1337${uri}`
                  }
                >
                  {post.content}
                </ReactMarkdown>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogPost;
