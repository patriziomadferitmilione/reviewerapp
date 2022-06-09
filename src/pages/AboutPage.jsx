import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>Credit</h1>
        <p>App interface to review services and products. Built with React. <br />  Inspired by Brad Traversy.</p>
        

        <p>
          <Link to='/'>Back To App</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
