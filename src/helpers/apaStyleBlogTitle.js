import {apStyleTitleCase} from 'ap-style-title-case'

const stopwords = 'a an and at but by for in nor of on or so the to up yet about with as can from you are'.split(' ')

export const apaStyleBlogTitle = (title) => {
  return apStyleTitleCase(title, {stopwords})
}