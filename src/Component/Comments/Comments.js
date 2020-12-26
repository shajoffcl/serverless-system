import React, { Component } from 'react'
import './Comments.css'
import { db } from '../../config'

export default class Comments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: '',
      commentsArr: []
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handlePost = this.handlePost.bind(this)
  }

  handlePost () {
    const { comment } = this.state

    if (!comment) {
      window.alert('Make a valid comment')
      return
    }
    const docRef = db.collection('NewtonSchoolComments').doc('Comments')
    docRef.set({
      post1: {
        [new Date().getTime()]: comment
      }
    }, { merge: true })
      .then(() => {
        docRef.onSnapshot((doc) => {
          const data = doc.data()
          console.log(data)
          this.setState({ commentsArr: data })
        })
        this.setState({ comment: '' })
        console.log('Document successfully written!')
      })
      .catch(function (error) {
        console.error('Error writing document: ', error)
      })
  }

  componentDidMount () {
    const docRef = db.collection('NewtonSchoolComments').doc('Comments')
    docRef.get().then((doc) => {
      if (doc.exists) {
        docRef.onSnapshot((doc) => {
          const data = doc.data()
          console.log(data)
          this.setState({ commentsArr: data })
        })
        console.log('Document data:', doc.data())
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    }).catch(function (error) {
      console.log('Error getting document:', error)
    })
  }

  handleOnChange (e) {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    let { comment, commentsArr } = this.state
    commentsArr = commentsArr.post1 ? commentsArr.post1 : []
    return (
      <div id='comments'>
        <h1>Comments</h1>
        <div className='comment-block'>

          {commentsArr && Object.values(commentsArr).length > 0 && Object.values(commentsArr).map((comment, index) => {
            return (
              <div key={index}> {comment} </div>
            )
          })}
        </div>
        <div className='text-block'>
          <div><input type='text' className='text' name='comment' value={comment} onChange={this.handleOnChange} /></div>
          <div className='post-btn' onClick={this.handlePost}>Post</div>
        </div>
      </div>
    )
  }
}
