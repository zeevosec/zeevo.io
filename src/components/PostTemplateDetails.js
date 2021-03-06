/** @jsx jsx */
import { jsx } from 'theme-ui';

import moment from 'moment';
import React from 'react';
import { Link } from 'gatsby';
import './style/posttemplatedetails.scss';

class PostTemplateDetails extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const tags = post.fields.tagSlugs;

    return (
      <div>
        <div>
          <h1 sx={{ mt: 0, mb: 0 }}>{post.frontmatter.title}</h1>
          <p sx={{ mt: 0 }}>Published on {moment(post.frontmatter.date).format('MMMM DD, YYYY')}</p>
          <div
            sx={{
              '& a': {
                color: 'primary',
              },
            }}
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
        <div>
          <ul className="post-single__tags-list">
            Read more:
            {tags &&
              tags.map((tag, i) => (
                <li className="post-single__tags-list-item" key={tag}>
                  <Link
                    to={tag}
                    className="post-single__tags-list-item-link"
                    sx={{
                      color: 'primary',
                    }}
                  >
                    {post.frontmatter.tags[i]}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <Link
          to="/"
          sx={{
            color: 'background',
            backgroundColor: 'primary',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '7.5rem',
            fontSize: '1rem',
            padding: '0 1rem',
            height: '35px',
            lineHeight: '2.1875rem',
            textAlign: 'center',
            fontWeight: 'heading',
            borderRadius: '0.1875rem',
            marginTop: '1.625rem',
          }}
        >
          Home
        </Link>
      </div>
    );
  }
}

export default PostTemplateDetails;
