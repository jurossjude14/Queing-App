

const ResultBoxEach = ({cuelist}) => {
  return (
    <div className='result-parent'>
        {cuelist.map((cue) => (
            cue.priority &&
                <span key={cue.id} className={`result-each ${cue.serving? 'serve-border' :'' }`}>
                    <small className='q-label'>⚑ Queue ID</small>
                    <div className='q-id'>{cue.genid}</div>
                    { cue.note.length > 0 &&
                          <div className='q-note'>
                            {cue.note}
                    </div>}
                </span>                
        ))}
    </div>
  )
}

export default ResultBoxEach
