import React from 'react'
import Panel from './Panel'
import data from '../data'

console.log(data)

const Container = () => {
  return (
    <div className='container'>
      <Panel
        isActive='true'
        id='1'
        title='Explore the world'
        backgroundImg='https://images.unsplash.com/photo-1609333904079-b781b46190ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1393&q=80'
      ></Panel>
      <Panel
        id='2'
        title='Wild Forest'
        backgroundImg='https://images.unsplash.com/photo-1609348505664-b1017d7ab055?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1411&q=80'
      ></Panel>
      <Panel
        id='3'
        title='Welcome'
        backgroundImg='https://images.unsplash.com/photo-1609333902660-0123cce702dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
      ></Panel>
      <Panel
        id='4'
        title='Sunny Beach'
        backgroundImg='https://images.unsplash.com/photo-1609264516311-706afaf3d80e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ></Panel>
      <Panel
        id='5'
        title='City on Winter'
        backgroundImg='https://images.unsplash.com/photo-1609323169878-b57e5a78bb03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ></Panel>
    </div>
  )
}

export default Container
