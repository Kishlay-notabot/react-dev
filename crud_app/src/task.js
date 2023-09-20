export const Task = (props) =>{
    return (
        <div className="App">
          <div className='inputs'>
            <div style={containerStyle}>
              <div className='container'>
                <div className='morphism'>
                  <input onChange={inpchg} value={newT} />
                  <button onClick={addT}>Enter</button>
                </div>
                <div style={blackDivStyle}></div> {/* Black div */}
              </div>
            </div>
          </div>
          <div className='list'>
            {crudTodo.map((props) => (
              <div key={props.id}>
                {props.taskName}
                <button onClick={() => delT(props.id)}>x</button>
              </div>
            ))}
          </div>
        </div>
      );
}