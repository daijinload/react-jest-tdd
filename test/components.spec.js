/* eslint-env mocha */

import assert from 'power-assert'
import React from 'react'
import { shallow, configure } from 'enzyme'
import { BeerListContainer, InputArea, BeerList } from '../src/components'

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('BeerListContainer', () => {
  it('should render InputArea and BeerList', () => {
    const wrapper = shallow(<BeerListContainer />)
    assert(wrapper.containsAllMatchingElements([<InputArea />, <BeerList />]))
  })
})

describe('numに1を入れた場合', () => {
  it('1が入ること', () => {
    const num = 2
    assert(num === 1) // 表示確認のため、わざと間違った数値を比較しています
  })
})
