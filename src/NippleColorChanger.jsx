import React, {useState} from "react";

const breasts=["Chocolate", "Pink", "LemonChiffon", "Maroon"];
const nipples=["Pink", "PaleVioletRed", "IndianRed", "black"];
function NippleColorChanger(){
    const [breast, setBreast]= useState(breasts[0])
    const [nipple, setNipple]= useState(nipples[0])

    const handleClick = ()=>{
        function changeBreast (){
            setBreast(prevBreast => {
            const currentIndex = breasts.indexOf(prevBreast);
            const nextIndex = (currentIndex+1) % breasts.length;
            return breasts[nextIndex];
        })}

        function changeNipple () {
            setNipple(prevNipple => {
                const currentIndex = nipples.indexOf(prevNipple);
                const nextIndex = (currentIndex+1) % nipples.length;
                return nipples[nextIndex];
            })
        }
        changeBreast()
        changeNipple()
    }

    return(
        <>
            <div style={{display: "flex", justifyContent: 'center', alignItems:'center', position: 'absolute', top: '50%', left: '50%'}}>
                <div style={{width:'100px', height:'100px', borderRadius: '100%', backgroundColor: breast}}></div>
                <div style={{width:'100px', height:'100px', borderRadius: '100%', backgroundColor: breast}}></div>
            </div>
            <div style={{display: "flex", justifyContent: 'center', alignItems:'center', position: 'absolute', top: '50%', left: '50%', gap: '20%'}}>
                <div style={{width:'15px', height:'15px', borderRadius: '100%', backgroundColor: nipple, }}></div>
                <div style={{width:'15px', height:'15px', borderRadius: '100%', backgroundColor: nipple, }}></div>
            </div>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}
export default NippleColorChanger

// import React, {useState} from "react";
//
// const colors= ["Chocolate", "Pink", "LemonChiffon", "Maroon"];
// const centerColors = ["Pink", "PaleVioletRed", "IndianRed", "black"]
// function NippleColorChanger () {
//     const [color, setColor] = useState(colors[0]);
//     const [centerColor, setCenterColor] = useState(centerColors[0])
//
//     function containerFunction () {
//     function changeColor () {
//         setColor( prevColor => {
//                         /*prevColor is a function used as an argument
//                         * previous state in code = most recent state before the update */
//             const currentIndex = colors.indexOf(prevColor);
//             const nextIndex = (currentIndex + 1) % colors.length;
//                                                         /*% = modulo operator gives remainder of division*/
//                                                         /*.length= method for how many elements are in the array*/
//                                                         /*color[3]+1 divided by 4 remains [0] starts the loop again  */
//             return colors[nextIndex];
//         });    }

//     function changeCenter () {
//         setCenterColor(prevCenterColor => {
//             const currentIndex = centerColors.indexOf(prevCenterColor);
//             const nextIndex = (currentIndex+1) % centerColors.length;
//             return centerColors[nextIndex];
//             }
//         )
//     }
//     changeColor()
//     changeCenter()
//     }
// return (
//         <>
//             <div className="boobContainer">
//                 <div className="boob" style={{backgroundColor: color, width: '100px', height: '100px'}}>
//                     <div className="nipple" style={{backgroundColor: centerColor, width: '15px', height:'15px'}}></div>
//                 </div>
//                 <div className="boob" style={{backgroundColor: color, width: '100px', height: '100px'}}>
//                     <div className="nipple" style={{backgroundColor: centerColor, width: '15px', height:'15px'}}></div>
//                 </div>
//             </div>
//             <button onClick={containerFunction}>Try me.</button>
//
//         </>
//     )
// }
//
// export default NippleColorChanger
