// Entry(입구) 파일

import _ from 'lodash'
import hello from './hello'
import world from './world'
import css from './style.css'

document.querySelector('#root').innerHTML = `${hello} ${world} ${_.camelCase('Foo Bar')}`
