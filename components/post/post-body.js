import markdownStyles from './markdown-styles.module.css'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'
import LinkRenderer from './LinkRenderer'
import ListRenderer from './ListRenderer'



export default function PostBody({ content, blogContent }) {
  function flatten(text, child) {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(flatten, text)
  }
  
  function HeadingRenderer(props) {
    var children = React.Children.toArray(props.children)
    var text = children.reduce(flatten, '')
    var slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, {id: slug}, props.children)
  }
  return (
    <div className="max-w-2xl mx-auto">
      <ReactMarkdown className={markdownStyles['markdown']} children={blogContent} renderers={{ code: CodeBlock, heading: HeadingRenderer, link: LinkRenderer, list: ListRenderer }}/>
    </div>
  )
}
