import React,{useState} from 'react'


export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })

    let myStyle = {
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white'
    }


    // const [btnText,setbtnText] = useState("Enable dark mode");

return (
        <div className="container my-3 " style={myStyle}>
            <h1 className="my-3 text-center">About Us</h1>
            <div id="accordion">
                <div className="card">
                    <div className="card-header" style={myStyle} id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn"  style={myStyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Analyze Your Text
        </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body" style={myStyle}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" style={myStyle} id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn  collapsed" style={myStyle}  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free To Use
        </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body" style={myStyle}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" style={myStyle} id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn  collapsed" style={myStyle}  data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser Compatability
        </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body" style={myStyle}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
