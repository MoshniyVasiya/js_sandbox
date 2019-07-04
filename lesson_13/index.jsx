import React from 'react';
import ReactDOM from 'react-dom';

// let count = 0;


// function User({firstName, lastName, age, children}) {   
//     const addition = children
//     ? <div style={{border: '1px dashed red' }}>{children}</div>
//     : null;
//     return (    
//         <div style={{ border: `${Math.random() * 5}px solid black`, marginTop: '15px', padding: '5px', width: '200px   ' }}>   
//             {count += 1}
//             <span>{firstName + ' '}</span>
//             <span>{lastName}</span>
//             <div>He(she) is {age} years old</div>
//             {addition}
//         </div>
//     )
// }

// window.render = function render() {
// ReactDOM.render((
//     <div className="asd">   
//         <User firstName="Ivan" lastName="Vanovskiy" age={29} >Some additional info</User>
//         <User firstName="Lena" lastName="Hilivina" age={29} >Some additional info</User>
//         <User firstName="H" lastName="B" age={180} ></User>

//         {/* {user('Ivan', 'Vanovskiy', 29)}
//         {user('Lena', 'Hilivina', 15)}
//         {user('H', 'B', 180)} */}
//     </div>
//     ), document.getElementById('root'));
// }

// window.render2 = function render2() {
//     ReactDOM.render((
//         <div className="asd">   
//             <User firstName="H" lastName="B" age={90} />

//         </div>
//         ), document.getElementById('root'));
//     }




function Circle({color='green', children}) { 
    const child = children
    return (   
    <div className="stylesClass" style={{ display:'inlineBlock', borderRadius: '50%', backgroundColor: color }}>
    {child}
    </div>
    )
}

function Rect({color='green', children}) {
    const child = children   
    return(
    <div className="stylesClass" style={{ backgroundColor: color }}>
    {child}
    </div>    
    )
}

function Address ({country, city, street, location}) {   
    const link = 'https://www.google.com/maps/@';
    return( 
        <address style={{}}>
            <a target="_blank" href={link + location.lat + ',' + location.lng + ',19z'}>{country+ ', ' + city + ', ' + street}</a>
        </address>
    )
}
const locationObj = {lat:49.5760139, lng:34.5317266};

function Header ({logo, title}) {   
return( 
    <header style={{textAlign: 'center', padding: '30px 0 30px', backgroundColor: 'rgb(148, 131, 111)'}}>    
    Header content
    </header>
)
}
function Main ({    }) { 

}
function Sidebar ({ }) {    

}
function Footer ({  }) {    
return( 
    <footer style={{backgroundColor: 'rgb(148, 131, 111)', textAlign: 'center', padding: '30px 0 30px'}}>    
    Footer content
    </footer>
)
}

ReactDOM.render((
       <div className="container" style={{maxWidth: '1000px', backgroundColor: 'bisque', display: "flex", flexDirection: 'column', margin: '0 auto'}}>
        <Header></Header>
       <main style={{height: '100%', display: 'flex'}}>
            
            <section className="sidebar" style={{display: 'flex', flexDirection: 'column'}}>
                <Rect > Sidebar area </Rect>
                <Rect > Sidebar area </Rect>
                <Rect > Sidebar area </Rect>
            </section>

            <section className="additions" style={{display: 'flex',}}>
                <Circle > text area </Circle> <Circle > text area </Circle> <Circle > text area </Circle> 
            </section>
            
       </main>

       
        
            <Address location={locationObj} country="Ukraine" city="Poltava" street="Navrotskogo, 17." ></Address>
            <Footer> </Footer>

       
      </div>
      
    ), document.getElementById('root'));


