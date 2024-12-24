import * as React from "react";
class HtmlComponent extends React.Component {
      render(){   
        return (
            <table>
                <tr>
            <div>
                <td><label>Textbox</label></td>
                <td><input type="text" /></td><br></br>
                <td><label>checkbox</label></td>
                <td><input type="checkbox" /></td><br></br>
                <td><label>radiobutton</label></td>
                <td><input type="radio" /></td><br></br>
                <td><label>color</label></td>
                <td><input type="color" /></td><br></br>
                <td><label>file</label></td>
                <td><input type="file" /></td><br></br>
                <td><label>Date</label></td>
                <td><input type="date" /></td><br></br>
            </div>
            </tr>
            </table>
        );
      }
    }
    export default HtmlComponent;