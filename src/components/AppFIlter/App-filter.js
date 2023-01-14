import './App-filter.scss'
const AppFilter = () => {
    return(
        <div className="app-filter">
              <div className='itemsLength'>5 left items</div>
            <div className="exercise">
                <div className='btn all'>All</div>
                <div className='btn active'>Active</div>
                <div className='btn completeted'>Active</div>
            </div>
        </div>
    )
} 
export default AppFilter