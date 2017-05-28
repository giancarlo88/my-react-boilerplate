import { expect } from 'chai'
import * as utils from './utils'

describe('utils:', () => {
  it('generate category titles should generate an array of category titles from an object', () => {
    const categories = [
      {
        id: 'faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9',
        title: 'Drinks Cabinet',
        box_limit: 7,
        is_default: false,
        recently_added: false,
        hidden: false,
        pivot: { created_at: '2016-08-25T10:53:15+0100' }
      },
      {
        id: '785741fc-3854-11e6-87a5-06f9522b85fb',
        title: 'Large Alcohol',
        box_limit: 2,
        is_default: false,
        recently_added: false,
        hidden: true,
        pivot: { created_at: '2016-08-25T10:53:15+0100' }
      }
    ]

    const result = ['Drinks Cabinet', 'Large Alcohol']
    expect(utils.generateCategoryTitles(categories)).to.deep.equal(result)
  })
})
