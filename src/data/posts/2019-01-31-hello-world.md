---
title: "Welcome to Jekyll2!"
type: "blog"
category: "Code Snippet"
published: true
---

**Hello world**, this is my first Jekyll blog post.

I hope you like it!

```javascript
const foo = {
  bar: 'test'
}

console.log(foo)
const foo = {
  bar: 'test'
}

console.log(foo)
const foo = {
  bar: 'test'
}

console.log(foo)
const foo = {
  bar: 'test'
}

console.log(foo)
const foo = {
  bar: 'test'
}

console.log(foo)

function PostCard({ post }) {
  const { style } = useThemeContext()
  return (
    <div
      className={`height-full text-left ${style === 'dark' ? 'box-shadow' : 'border border - gray - light'} bg-white rounded-1 p-3`}>
      < div className="d-flex flex-justify-between flex-items-start mb-1">
        <h1 className="f4 lh-condensed mb-1">
          <Link to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        </h1>
      </div>
      <div className="text-gray mb-2 ws-normal">{formatPostDate(`${post.fields.postDate}`)}</div>
    </div>

  )
}
```