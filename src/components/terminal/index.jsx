import React  from 'react'
import {XTerm} from 'xterm-for-react'

const TerminalEmulator = ()=>{
  const xtermRef = React.useRef(null)

  React.useEffect(() => {
    // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
    xtermRef.current.terminal.writeln("Hello, World!")
  }, [])


  return(

    <div
      style={{width:"100%" , height:300 }}

    >
      <XTerm
        ref={xtermRef}
      />
    </div>
  )




}

export default TerminalEmulator