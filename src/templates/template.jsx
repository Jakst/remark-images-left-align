import React from 'react'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div>
      <div style={{ backgroundColor: '#eee', padding: 30 }}>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
